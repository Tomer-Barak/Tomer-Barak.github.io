---
layout: project_post
title: "A scale Hamiltonian framework for multiscale systems: A Hamilton–Jacobi approach with application to glass-forming liquids"
date: 2025-05-20
project: "Scale Theory"  # Update as needed
tags: [renormalization group, glass transition, Hamiltonian, multiscale, physics]
project_slug: "scale-theory"
---

## Abstract
We develop a comprehensive scale Hamiltonian formalism for multiscale systems by recasting the renormalization group (RG) flow in a Hamiltonian framework and then reformulating it in terms of Hamilton--Jacobi theory. In this picture, an effective coupling is treated as a coordinate with a conjugate momentum, and the RG evolution is governed by a scale Hamiltonian. Under reasonable assumptions, we derive an effective action that serves as an RG invariant or potential. As a concrete application, we study glass-forming liquids, where the approach naturally leads to a derivation of the Vogel--Fulcher--Tammann (VFT) law for the divergence of the relaxation time near the glass transition. Our framework provides a novel quantitative prediction linking microscopic RG parameters to measurable macroscopic properties.

## Introduction
Understanding multiscale phenomena is one of the central challenges in physics. Many systems exhibit rich behavior across a wide range of scales. For example, a glass-forming liquid displays complex dynamics from the microscopic motion of atoms to macroscopic relaxation processes, especially near the glass transition temperature $T_0$. Although several approaches exist for analyzing such systems (e.g., renormalization group techniques, effective field theories, and statistical mechanical models), there remains a need for a unified formalism that systematically connects microscopic parameters to macroscopic observables.

In this work, we introduce a *scale Hamiltonian* approach that reformulates the RG flow as a Hamiltonian dynamical system. By treating the effective coupling $g$ as a dynamical variable with a conjugate momentum $p$, we can recast the RG flow in terms of Hamilton's equations. Further, by applying a Hamilton--Jacobi formulation, we derive an effective action $S(g)$ that encodes the cumulative effects of the RG flow. We then apply this formalism to glass-forming liquids and show that it leads naturally to the Vogel--Fulcher--Tammann (VFT) law for the dramatic slowing down of dynamics near the glass transition.

Our paper is organized as follows. The first section outlines the scale Hamiltonian formalism and its Hamilton--Jacobi formulation. The next section applies the formalism to glass-forming liquids and derives quantitative predictions. We then discuss the implications of our findings and outline directions for future work. Finally, we summarize our results.

## Theoretical framework

### Scale Hamiltonian formalism
Renormalization group (RG) methods have been tremendously successful in describing critical phenomena and multiscale behavior [1]. In a conventional RG scheme, an effective coupling $g$ evolves with a logarithmic scale parameter $\tau$ (often defined as $\tau = \ln (\mu/\mu_0)$, where $\mu$ is the running energy scale) according to a beta function:

$$
\frac{dg}{d\tau} = \beta(g).
$$

To recast this as a dynamical system, we introduce a conjugate momentum $p$ and define a scale Hamiltonian

$$
H(g,p) = p\,\beta(g) + F(g),
$$

where $F(g)$ is an additional function that may capture higher-order effects or corrections not included in the beta function. The corresponding Hamilton's equations are:

$$
\frac{dg}{d\tau} = \frac{\partial H}{\partial p} = \beta(g),
$$
$$
\frac{dp}{d\tau} = -\frac{\partial H}{\partial g} = -p\,\beta'(g) - F'(g).
$$

Thus, the familiar RG flow is recovered as the equation for $g(\tau)$.

### Hamilton–Jacobi formulation
The Hamilton--Jacobi (HJ) formulation is a powerful tool in classical mechanics and has been fruitfully applied in the context of holographic RG [2]. In our case, we introduce Hamilton's principal function $S(g,\tau)$ such that

$$
p = \frac{\delta S(g,\tau)}{\delta g}.
$$

The HJ equation then reads:

$$
\frac{\partial S}{\partial \tau} + H\left(g,\frac{\delta S}{\delta g}\right) = 0.
$$

Inserting the form of the Hamiltonian gives:

$$
\frac{\partial S}{\partial \tau} + \beta(g)\,\frac{\delta S}{\delta g} + F(g) = 0.
$$

A common assumption in many RG contexts is that the effective action depends on the scale $\tau$ only through the running coupling $g(\tau)$. That is,

$$
S(g,\tau) = S(g),
$$

which implies $\partial S/\partial \tau = 0$. Under this assumption, the equation reduces to

$$
\beta(g)\,\frac{dS}{dg} + F(g) = 0.
$$

This equation can be solved to yield

$$
S(g) = -\int^{g} \frac{F(g')}{\beta(g')}\,dg' + \text{constant}.
$$

The function $S(g)$ encodes the integrated effect of the RG flow and can be interpreted as an RG invariant or potential, much like the c-function in conformal field theory [3].

## Application to glass-forming liquids

### Background and motivation
Glass-forming liquids exhibit a dramatic slowing down of dynamics as the temperature $T$ approaches a critical value $T_0$. Experimentally, the relaxation time $\tau(T)$ is well described by the Vogel--Fulcher--Tammann (VFT) law:

$$
\tau(T) \sim \tau_0\, \exp\!\Biggl(\frac{D\, T_0}{T-T_0}\Biggr),
$$

where $\tau_0$ is a microscopic timescale and $D\,T_0$ is an empirical parameter. Although several phenomenological theories exist, a fully microscopic derivation remains elusive.

### Mapping temperature to an effective coupling
Within our framework, we associate the distance from the glass transition with an effective coupling:

$$
g \propto (T-T_0).
$$

Thus, as $T \to T_0$, $g \to 0$. In this mapping, the RG flow of $g$ encapsulates the evolution of the effective interactions as one approaches the glassy state.

### Assumptions for the RG flow
Near the glass transition, we assume that the beta function can be approximated by a linear behavior:

$$
\beta(g) = \lambda\, g,
$$

where $\lambda>0$ is a constant that characterizes the rate at which the effective coupling evolves with scale. This linearization is justified when $g$ is small.

Furthermore, we choose the function $F(g)$ to capture the idea that an effective activation barrier diverges as $g\to 0$. A natural choice is:

$$
F(g) = \frac{A}{g},
$$

where $A$ is a constant with units that depend on the particular physical system.

### Derivation of the effective action
Substituting the above into the reduced HJ equation yields

$$
\lambda\, g\, \frac{dS}{dg} + \frac{A}{g} = 0.
$$

Rearranging, we obtain

$$
\frac{dS}{dg} = -\frac{A}{\lambda\, g^2}.
$$

Integrating with respect to $g$ leads to

$$
S(g) = \frac{A}{\lambda}\,\frac{1}{g} + \text{constant}.
$$

Discarding the integration constant (or absorbing it into a redefinition of the timescale), and using the mapping above, we write

$$
S(T) \sim \frac{A'}{T-T_0},
$$

where $A'$ is an effective constant defined by $A' \propto A/\lambda$.

### Relating the effective action to measurable relaxation times
A central hypothesis in many theories of activated dynamics is that the relaxation time $\tau(T)$ is given by an Arrhenius-type expression involving an effective activation energy. In our formulation, we identify the effective action $S(T)$ with the activation energy barrier, so that

$$
\tau(T) \sim \tau_0\, \exp\!\Bigl(S(T)\Bigr).
$$

Substituting, we get

$$
\tau(T) \sim \tau_0\, \exp\!\Biggl(\frac{A'}{T-T_0}\Biggr),
$$

which is identical in form to the VFT law. This correspondence implies the identification

$$
D\,T_0 = \frac{A}{\lambda}.
$$

Thus, if experimental data gives a value for $D\,T_0$, our framework predicts that microscopic or simulation-based determinations of $\lambda$ (from the RG flow) and $A$ (from the effective activation barrier) should satisfy this relation. For example, if experiments yield $D\,T_0 \approx 500\,\text{K}$ and simulations suggest $\lambda \approx 0.1$ (in appropriate units), then our theory predicts

$$
A \approx 50\,\text{K}.
$$

Such a prediction is directly testable and provides a clear link between microscopic RG parameters and macroscopic relaxation behavior in glass-forming liquids.

## Discussion
The scale Hamiltonian formalism provides a new lens through which to view RG flow and multiscale dynamics. By introducing a conjugate momentum and recasting the evolution in a Hamilton--Jacobi framework, we derive an effective action that serves as an integrated measure of the RG flow. In the case study of glass-forming liquids, this approach reproduces the empirical VFT law and yields a quantitative prediction linking microscopic parameters ($A$ and $\lambda$) to the observed divergence of the relaxation time.

Several avenues for further research emerge:
- **Extension to Multiple Couplings:** Many physical systems involve several interacting couplings. Extending the current formalism to a multidimensional phase space and studying the coupled Hamilton--Jacobi equations may provide insight into more complex multiscale behavior.
- **Connection to Holographic RG:** The Hamilton--Jacobi formulation has proven fruitful in holographic approaches to strongly coupled systems [2]. Establishing a more explicit connection between our scale Hamiltonian method and holographic RG techniques could lead to new predictions for transport coefficients and spectral functions.
- **Nonlinear and Non-Perturbative Effects:** While our derivation relied on linearization near the glass transition, including higher-order terms in the beta function or exploring non-perturbative regimes might capture additional features observed in experiments.
- **Experimental Validation:** Detailed numerical simulations or experiments that independently estimate the RG parameters $\lambda$ and $A$ would allow for a direct test of the above prediction. Such tests could confirm the validity of the scale Hamiltonian approach in describing glassy dynamics.

## Conclusion
We have developed a scale Hamiltonian framework for multiscale systems by recasting the RG flow in a Hamiltonian and subsequently a Hamilton--Jacobi formulation. This formalism leads to an effective action $S(g)$ that encapsulates the cumulative effects of the RG flow and can be interpreted as an RG invariant or potential. As a concrete application, we derived the Vogel--Fulcher--Tammann law for the relaxation time in glass-forming liquids, arriving at the relation

$$
D\,T_0 = \frac{A}{\lambda},
$$

which directly connects microscopic parameters to experimentally measurable quantities.

Our approach not only unifies different perspectives on RG and multiscale phenomena but also offers testable predictions. Future work will aim to generalize the method to more complex systems and explore its connections with holographic and non-equilibrium RG frameworks.

## Acknowledgments
We thank colleagues in the theoretical physics and applied mathematics communities for insightful discussions. This work was supported by [Funding Agency] under Grant No. [Grant Number].

## References
1. K. G. Wilson and J. Kogut, "The renormalization group and the epsilon expansion," Phys. Rep. 12, 75–199 (1974).
2. J. de Boer, E. Verlinde, and H. Verlinde, "On the holographic renormalization group," JHEP 08, 003 (2000).
3. A. B. Zamolodchikov, "Irreversibility of the flux of the renormalization group in a 2D field theory," JETP Lett. 43, 730–732 (1986).
