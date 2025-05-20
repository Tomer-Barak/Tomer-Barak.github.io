---
layout: project_post
title: "Beyond the linear β: Higher-order scale dynamics — Revised"
date: 2025-05-20
project: "Scale Theory"
project_slug: "scale-theory"
tags: [Scale Dynamics, Renormalization Group, Nonlinear Flow, Hamiltonian Mechanics, Higher-Order Effects]
mathjax: true
---

*This post builds on* <a href="/projects/2025-05-15-from-time-to-scale-dynamics/">"From Time to Scale Dynamics"</a>, <a href="/projects/2025-05-20-canonical-transformations-scheme-independence/">"Canonical Transformations & Scheme Independence"</a>, and <a href="/projects/2025-05-20-irreversible-scale-dynamics/">"Irreversible Scale Dynamics"</a>.  There we treated the renormalisation‑group (RG) β‑functions as the **sole engine** of scale evolution:

$$
H_{\text{scale}}(g,p)=p_i\,\beta_i(g).
$$

Today we lift the hood and ask a simple question:

> **What if the textbook β is just the *leading term* of a richer, non‑linear flow in \$(g\_i,p\_i)\$ phase‑space?**

The answer opens an entire landscape of new phenomena—closed orbits, scheme‑independent invariants, and non‑perturbative deformations of critical exponents—while recovering the familiar β‑functions as a special “linear‑momentum” slice.

---

## 0 · Why the textbook β is linear

In the minimalist ansatz the momenta \$p\_i\$ enter *only once* and *linearly*:

$$
H_{\text{scale}}=p_i\,\beta_i(g).
$$

Differentiating with respect to \$p\_i\$ gives

$$
\dot g_i=\partial_{p_i}H_{\text{scale}}=\beta_i(g),
$$

a direct copy of RG flow.  Nothing in symplectic—or even contact—geometry *forces* us to stop there.  We stopped only because perturbation theory at weak coupling typically sets \$p\_i\approx0\$, making higher powers negligible **to leading order**.

---

## 1 · The momentum expansion

The most general *analytic* scale Hamiltonian is a power series in the canonical momenta:

$$
H_{\text{scale}}(g,p)=\sum_{n=1}^{\infty}\frac{1}{n!}\,T^{(n)}_{i_1\dots i_n}(g)\,p_{i_1}\dots p_{i_n}.\tag{1}
$$

Because the monomial \$p\_{i\_1}\dots p\_{i\_n}\$ is totally symmetric in its indices, only the **fully‑symmetric** part of every coefficient tensor \$T^{(n)}\$ can contribute.  In particular

$$
T^{(1)}_i(g)=\beta_i(g),\qquad
T^{(2)}_{ij}=A_{ij}(g)=A_{ji}(g),\qquad
T^{(3)}_{ijk}=B_{ijk}(g)=B_{(ijk)}(g),\;\dots
$$

The symmetry property is crucial: antisymmetric tensors drop out identically and cannot drive the dynamics.

---

## 2 · Equations of motion to cubic order

Truncating (1) at \$n=3\$ and applying Hamilton’s equations yields

$$
\begin{aligned}
\dot g_i &= \beta_i(g)+A_{ij}(g)\,p_j+\tfrac12 B_{ijk}(g)\,p_jp_k+\mathcal O(p^3),\\[6pt]
\dot p_i &= -p_j\,\partial_{g_i}\beta_j-\tfrac12 p_jp_k\,\partial_{g_i}A_{jk}-\tfrac16 p_jp_kp_\ell\,\partial_{g_i}B_{jk\ell}+\mathcal O(p^4).
\end{aligned}\tag{2}
$$

\footnote{**Sign convention:** throughout we adopt \$\dot g\_i = \partial\_{p\_i}H\$ and \$\dot p\_i = -\partial\_{g\_i}H\$, sometimes referred to as the (+ – – –) convention.}

Any initial momentum \$p\_i(0)\neq0\$ therefore feeds back into \$\dot g\_i\$ as long as \$A\_{ij}\not\equiv0\$—a generic situation beyond the linear approximation.

---

## 3 · Physics unlocked by higher‑order terms

### 3.1 Closed orbits and discrete scale invariance

With symmetric but non‑vanishing \$A\_{ij}\$ and/or \$B\_{ijk}\$, the joint \$(g,p)\$ flow need not terminate at fixed points.  Non‑linear couplings between \$g\$ and \$p\$ can generate **closed orbits**—Hamiltonian “limit cycles” in which the system revisits couplings at discrete scale factors.  *Unlike the incorrect argument in the first post, no antisymmetric part of \$A\_{ij}\$ is required; closed trajectories arise from the conservative two‑degree‑of‑freedom dynamics itself or, if genuine attraction is desired, from the contact‑friction deformation discussed below.*

### 3.2 Scheme dependence revisited

A change of renormalisation scheme is a canonical diffeomorphism that preserves the symplectic form.  Once quadratic terms are admitted the family of generating functions \$F(g,\tilde p)\$ widens, explaining why higher‑loop β‑coefficients mix under scheme change while the one‑loop piece stays universal.

### 3.3 Non‑perturbative deformations of critical exponents

Near a fixed point \$(g\_i^*,p\_i^*)=(g\_i^\*,0)\$, linearising (2) gives

$$
\mathcal M=\begin{pmatrix}
\partial_{g_j}\beta_i & A_{ij}\\[4pt]
0 & -\partial_{g_i}\beta_j
\end{pmatrix}_{(g^*,0)}.
$$

Because \$\mathcal M\$ is **block‑triangular**, its eigenvalues are those of the diagonal blocks: the standard critical‑exponent matrix \$\partial\_{g}\beta\$ and its negative transpose.  The off‑diagonal block \$A\_{ij}\$ alters eigenvectors (Jordan structure) but **does not shift eigenvalues at linear order**.  Observable shifts in critical exponents therefore originate from higher‑order (non‑linear) corrections—exactly what the extended Hamiltonian is equipped to capture.

---

## 4 · Worked example: \$\phi^4\$ in \$d=4-\varepsilon\$

The one‑loop β‑function is

$$
\beta(g)= -\varepsilon g + \lambda g^2.
$$

Suppose integrating out irrelevant operators induces a quadratic tensor

$$
A_{gg}=c\,g.
$$

The truncated Hamiltonian is then

$$
H=p\,(-\varepsilon g + \lambda g^2)+\tfrac12 c\,g\,p^2.\tag{3}
$$

With a single coupling this is a **one‑degree‑of‑freedom** Hamiltonian system, so phase‑space volume is conserved and closed orbits—when they appear—are *neutrally* periodic, not attracting.

Along a constant‑\$H\$ trajectory the quadratic polynomial in \$p\$ has discriminant

$$
D=(\lambda g^{2}-\varepsilon g)^{2}+2c\,g\,H.\tag{4}
$$

Closed orbits exist whenever $D$ changes sign between two turning points $g_{\min},g_{\max}$.

Direct integration shows three qualitative regimes:

* **Small** $\lvert c \rvert$ — trajectories drift slowly toward the Wilson–Fisher fixed point.
* **Moderate** $\lvert c \rvert$ — the non‑linear $p^{2}$ term bends the constant‑$H$ curves into closed loops, realising discrete scale invariance.
* **Large** $\lvert c \rvert$ — kinetic energy dominates and trajectories run away.

The exact period of a closed orbit is an elliptic integral.  For \$\lvert c \rvert \ll1\$ it reduces to the leading approximation

$$
\tau\;\approx\;\frac{2\pi}{\sqrt{c\,\lambda\,\varepsilon}}\;\Bigl[1+\mathcal O(c^{0})\Bigr].\tag{5}
$$

---

## 5 · When does the linear truncation hold?

| Regime                                        | Justification for dropping \$p^2\$ and higher                                                                                                                            |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Perturbative UV**                           | Bare actions start with \$p\_i\approx0\$; symmetry and loop factors typically suppress \$A\_{ij}\$ and higher.                                                           |
| **Near a stable fixed point**                 | Momentum decays exponentially, so \$A\_{ij}p\_j\ll\beta\_i\$.                                                                                                            |
| **Contact friction \$\gamma>0\$**             | As shown in the “Irreversible” post, \$p\$ is damped when \$\gamma>\lambda\_{\text{RG}}\$.                                                                               |
| **Strong coupling / Irrelevant fixed points** | Higher‑order momentum terms often dominate, so the linear truncation **fails altogether**; a resummed or non‑perturbative treatment is mandatory. *\[Clarified wording]* |

---

## 6 · Outlook & open questions

1. **Quantising scale mechanics**
   The canonical structure begs for quantisation.  Does promoting \$p\_i\$ to differential operators reproduce known functional‑RG equations or unveil new, genuinely quantum scale phenomena?

2. **Contact‑geometry deformations**
   Dissipation (the “\$\gamma\$‑term”) converts closed orbits into *stable* limit cycles.  Mapping the transition from conservative to contact flows may shed light on irreversibility in real QFTs.

3. **Numerical experiments**
   Lattice implementations could inject controlled momentum packets into RG flows and track the emergence (or absence) of discrete scale invariance.

4. **Scheme‑independent invariants**
   Beyond the β‑vector‑field, what additional integrals of motion survive arbitrary canonical transformations?  First candidates are the Casimirs built from symmetric tensors \$T^{(n)}\$.

5. **Bridging to holography**
   In AdS/CFT the radial Hamiltonian already contains higher‑order momenta.  Do the closed orbits described here parallel holographic RG cycles?

---

### Key takeaway

**The familiar β‑function sits atop a tower of higher‑momentum couplings.  Ignoring them is safe in the perturbative UV and near attractive fixed points—but can erase whole classes of scale phenomena whenever momentum feedback becomes non‑negligible.**

Future posts will extend the analysis to multi‑field models and explore how contact‑geometry friction selects *which* higher‑order terms actually matter in real QFTs.
