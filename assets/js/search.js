// Search functionality for blog
document.addEventListener('DOMContentLoaded', function() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');
  
  if (query) {
    document.getElementById('search-query').textContent = query;
    document.getElementById('search-term').value = query;
    
    // Fetch the JSON index of all posts
    fetch('/search-index.json')
      .then(response => response.json())
      .then(data => {
        const results = searchPosts(data, query);
        displayResults(results, query);
      })
      .catch(error => {
        console.error('Error fetching search index:', error);
        displayError();
      });
  } else {
    document.getElementById('search-results').innerHTML = '<p>Please enter a search term.</p>';
  }
});

function searchPosts(posts, query) {
  query = query.toLowerCase();
  
  // Score each post based on relevance
  return posts.map(post => {
    const titleMatches = countMatches(post.title.toLowerCase(), query);
    const contentMatches = countMatches(post.content.toLowerCase(), query);
    const tagMatches = post.tags ? countTagMatches(post.tags, query) : 0;
    
    // Calculate score (title matches count more, then tags, then content)
    const score = titleMatches * 10 + tagMatches * 5 + contentMatches;
    
    return {
      ...post,
      score: score
    };
  })
  // Filter to only posts with matches
  .filter(post => post.score > 0)
  // Sort by score descending
  .sort((a, b) => b.score - a.score);
}

function countMatches(text, query) {
  // Simple count of query occurrences in text
  const regex = new RegExp(query, 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function countTagMatches(tags, query) {
  let matches = 0;
  tags.forEach(tag => {
    if (tag.toLowerCase().includes(query)) {
      matches++;
    }
  });
  return matches;
}

function displayResults(results, query) {
  const resultsContainer = document.getElementById('search-results');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found for "<span class="search-highlight">' + query + '</span>"</p>';
    return;
  }
  
  // Display the number of results found
  const resultsCount = document.createElement('p');
  resultsCount.className = 'results-count';
  resultsCount.innerHTML = `Found <span class="search-highlight">${results.length}</span> result${results.length > 1 ? 's' : ''} for "<span class="search-highlight">${query}</span>"`;
  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(resultsCount);
  
  // Create and display each result
  results.forEach(post => {
    // Create a better excerpt by finding the query in the content
    let excerpt = createContextualExcerpt(post.content, query);
    
    const article = document.createElement('article');
    article.className = 'search-result';
    
    article.innerHTML = `
      <h2><a href="${post.url}">${highlightQuery(post.title, query)}</a></h2>
      <p class="search-date">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      ${post.tags && post.tags.length > 0 ? 
        `<div class="search-tags">
          ${post.tags.map(tag => `<span class="search-tag">${highlightQuery(tag, query)}</span>`).join('')}
        </div>` : ''}
      <p class="search-excerpt">${excerpt}</p>
      <a href="${post.url}" class="search-read-more">Read More</a>
    `;
    
    resultsContainer.appendChild(article);
  });
}

function createContextualExcerpt(content, query) {
  const lowercaseContent = content.toLowerCase();
  const lowercaseQuery = query.toLowerCase();
  const index = lowercaseContent.indexOf(lowercaseQuery);
  
  if (index === -1) {
    // If query not found in exact form, just return the start of the content
    return content.substring(0, 150) + '...';
  }
  
  // Find a good starting point for excerpt (start a bit before the match)
  let start = Math.max(0, index - 60);
  
  // Find the start of the current sentence or paragraph if possible
  const priorPeriod = content.lastIndexOf('. ', start);
  if (priorPeriod !== -1 && priorPeriod > index - 100) {
    start = priorPeriod + 2; // +2 to skip the period and space
  }
  
  // Get enough content to provide context
  const excerptLength = 200;
  let excerpt = content.substring(start, start + excerptLength);
  
  // Add ellipsis if we're not starting at the beginning
  if (start > 0) {
    excerpt = '...' + excerpt;
  }
  
  // Add ellipsis if we're not ending at the end
  if (start + excerptLength < content.length) {
    excerpt = excerpt + '...';
  }
  
  // Highlight the query in the excerpt
  return highlightQuery(excerpt, query);
}

function highlightQuery(text, query) {
  // Case-insensitive replacement to highlight the query
  const regex = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'gi');
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function displayError() {
  document.getElementById('search-results').innerHTML = 
    '<p>Sorry, there was an error performing your search. Please try again later.</p>';
}
