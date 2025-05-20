---
layout: project_post
title: "Scale dynamics in context: Connecting our framework to recent literature"
date: 2025-05-20
project: "Scale Theory"
project_slug: "scale-theory"
tags: [Scale Dynamics, Symplectic Geometry, Renormalization Group, Contact Geometry, Holographic RG]
mathjax: true
---

# Scale Dynamics in Context: Connecting Our Framework to Recent Literature

In our recent series of posts on scale dynamics ([From Time to Scale]({{ site.baseurl }}/projects/2025-05-15-from-time-to-scale-dynamics/), [Canonical Transformations]({{ site.baseurl }}/projects/2025-05-20-canonical-transformations-scheme-independence/), [Irreversible Scale Dynamics]({{ site.baseurl }}/projects/2025-05-20-irreversible-scale-dynamics/), and [Beyond the Linear β]({{ site.baseurl }}/projects/2025-05-20-beta-is-linear/)), we developed a framework that rewrites renormalization-group (RG) flows in Hamiltonian and contact-geometric language. Below we place those ideas next to very recent work on geometric flows, holography, and rigorous RG.

## Our Framework in Brief

1. **Hamiltonian formulation** – Treat the scale parameter $\tau=\ln(\mu/\mu_0)$ as a time-like coordinate and build a phase-space of couplings $g_i$ and conjugate momenta $p_i$ with a “scale Hamiltonian” $H_{\text{scale}}(g,p)$.

2. **Scheme changes as canonical transformations** – Renormalization-scheme changes appear as canonical (symplectic) transformations, explaining scheme-independence of observables.

3. **Contact geometry for irreversibility** – Extending to a contact manifold by adding a coordinate $s$ that tracks information loss naturally encodes the irreversibility of RG flows.

4. **Higher-order momentum terms** – Terms beyond the linear approximation give rise to phenomena such as closed orbits in scale space and altered critical behaviour.

5. **Hamilton-Jacobi approach to glassy systems** – Applying the Hamilton-Jacobi formulation reproduces the Vogel–Fulcher–Tammann law, linking microscopic RG parameters to macroscopic observables.

## Connections to Recent Literature

### Holographic RG flows with symplectic structure

Karndumri showed that **electric–magnetic (“symplectic”) deformations** in four-dimensional $\mathcal N=4$ gauged supergravity generate new $\mathcal N=1$ and $\mathcal N=2$ RG solutions (Phys. Rev. D 105 086009, 2022; [arXiv:2203.01766](https://arxiv.org/abs/2203.01766)).  
Our *Canonical Transformations* post provides a model-independent explanation: because scheme changes are symplectic, physical predictions remain intact under those holographic deformations.

### Rigorous RG for symplectic-fermion models

A non-perturbative construction of RG fixed points for **symplectic-fermion** theories was given by Giuliani, Mastropietro & Rychkov (JHEP 01 (2021) 026; [arXiv:2008.04361](https://arxiv.org/abs/2008.04361)).  
Where that paper proves existence and analyticity, our *Beyond the Linear β* post explores what happens when quadratic and higher momentum terms are retained—e.g. closed orbits and discrete scale invariance. Both perspectives insist on preserving the underlying symplectic structure.

### Symplectic geometric-flow techniques

Fei & Phong introduced **dual Ricci flow** and **Hitchin gradient flow** on symplectic manifolds, including short-time existence via a DeTurck trick ([arXiv:2111.14048](https://arxiv.org/abs/2111.14048)).  
Our *Irreversible Scale Dynamics* post parallels these results: the contact one-form $\eta=\mathrm d s-p_i\,\mathrm d g_i$ supplies a built-in monotone, much like Perelman-type entropies in Ricci flow.

### Entropic monotones and irreversibility

Information-theoretic proofs of RG irreversibility—e.g. the defect-entropy $g$-theorem (Cuomo *et al.*, Phys. Rev. Lett. 128 021603, 2022) and work by Castro-Alvaredo *et al.* (arXiv:1706.01871)—resonate with our contact-geometry monotone $C_{\text{mon}}=K$, further tying geometric structure to information loss.

## Novel Contributions and Future Directions

1. **Contact geometry for irreversibility** – Our contact formulation supplies a geometric c-like monotone that invites comparison with information-geometric approaches.

2. **Higher-order momentum terms** – Closed orbits, scheme-independent invariants, and exotic critical exponents emerge once quadratic and higher terms are kept.

3. **Bridge to non-equilibrium statistical mechanics** – The contact friction term $-\gamma s$ mirrors dissipative terms in stochastic thermodynamics, hinting at fluctuation theorems for RG.

4. **Quantization of scale space** – Promoting $g_i$ and $p_i$ to operators suggests a “quantum scale mechanics,” connecting to quantum-information aspects of RG and holography.

## Conclusion

By emphasizing the dynamical and geometric structure of scale transformations, our framework links holographic RG, rigorous symplectic-fermion results, and modern geometric-flow techniques. We anticipate fruitful exchanges among these approaches—particularly on irreversibility, higher-order dynamics, and quantum extensions—that will deepen our understanding of how nature organizes itself across scales.

*Future posts will explore stochastic thermodynamics, quantum-information aspects of RG, and applications to strongly-coupled systems. We welcome collaborations with researchers pursuing related directions.*

---

### References

1. P. Karndumri, “**Holographic RG flows and symplectic deformations of $\mathcal N=4$ gauged supergravity**,” *Phys. Rev. D* 105 086009 (2022). <https://doi.org/10.1103/PhysRevD.105.086009>  
2. A. Giuliani, V. Mastropietro & S. Rychkov, “**Gentle introduction to rigorous RG: a worked fermionic example**,” *JHEP* 01 (2021) 026. <https://arxiv.org/abs/2008.04361>  
3. T. Fei & D. H. Phong, “**Symplectic geometric flows**,” arXiv:2111.14048 (2021).  
4. O. A. Castro-Alvaredo, B. Doyon & F. Ravanini, “**Irreversibility of the RG flow in non-unitary QFT**,” arXiv:1706.01871 (2017).  
5. C. Cuomo *et al.*, “**Renormalization-group flows on line defects**,” *Phys. Rev. Lett.* 128 021603 (2022).