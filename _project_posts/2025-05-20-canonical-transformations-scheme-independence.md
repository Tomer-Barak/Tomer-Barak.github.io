---

layout: project_post
title: "Canonical transformations and scheme independence"
date: 2025-05-20
project: "Scale Theory"
project_slug: "scale-theory"
tags: [Scale Dynamics, Renormalization Group, Canonical Transformations, Hamiltonian Mechanics]
mathjax: true
---


*Recap.* In the <a href="/projects/2025-05-15-from-time-to-scale-dynamics/">post "From Time to Scale Dynamics"</a> we traded the ordinary notion of **time** for the log‑scale $\tau = \ln(\mu/\mu_0)$ and promoted the **Hamiltonian itself** to the role of a dynamic coordinate.  Writing $(g_i , p_i)$ for *positions* (couplings) and their conjugate *momenta*, we obtained a **symplectic** picture of RG flow:

$$
\dot g_i = \frac{\partial H_{\text{scale}}}{\partial p_i},
\qquad
\dot p_i = -\frac{\partial H_{\text{scale}}}{\partial g_i},
$$

with the minimalist choice

$$
H_{\text{scale}} = p_i \, \beta_i(g).
$$

Today we **push the analogy further**.  In ordinary mechanics, *canonical
transformations* change coordinates while preserving Hamilton’s equations.
Exactly the same machinery lets us understand

> **Why changing the renormalisation *scheme* leaves the physics intact.**

The payoff is a deeper grasp of **universality** plus a new collection of tools
for discovering *invariants* and *symmetries* in QFT.  Let’s go exploring!

---

## 1 · A puzzle of uniqueness

Different renormalisation prescriptions—dimensional vs. cut‑off, minimal
subtraction vs. momentum subtraction, on‑shell vs. off‑shell—yield different‑
looking \$\beta\$‑functions.  Yet measurable quantities (masses, S‑matrix
elements, critical exponents, …) coincide.  How can that be *guaranteed*?

The textbook answer involves lengthy checks order‑by‑order in perturbation
theory.  **Scale dynamics offers a one‑line explanation:** a change of scheme is
nothing but a *canonical transformation* in the phase‑space \$(g,p)\$ of scale
flow.

---

## 2 · Canonical transformations: a refresher

A map \$(q,p) \rightarrow (Q,P)\$ is **canonical** when it leaves the symplectic
2‑form invariant:

$$
\omega = \sum_i dq_i \wedge dp_i = \sum_i dQ_i \wedge dP_i.
$$

A convenient way to construct such maps is with a generating function.  Choose
\$F(q,P)\$ and define

$$
p_i = \frac{\partial F}{\partial q_i},
\qquad
Q_i = \frac{\partial F}{\partial P_i}.
$$

### Why does this preserve \$\omega\$? <small>(technical aside)</small>

Taking the exterior derivative of \$p\_i,dq\_i - P\_i,dQ\_i = dF\$ and wedging both
sides with the coordinate differentials gives

$$
\sum_i dq_i \wedge dp_i = \sum_i dQ_i \wedge dP_i,
$$

so the symplectic form is unchanged — precisely the canonical condition.
That result survives *verbatim* when \$(q,p)\$ are replaced by \$(g,p)\$.

---

## 3 · Scheme changes as canonical transformations

A renormalisation‑scheme change is just the point transformation

$$
\tilde g_i = f_i(g),
$$

with the conjugate momenta determined by

$$
\tilde p_i = \sum_j \frac{\partial g_j}{\partial \tilde g_i}\,p_j.
$$

(The Jacobian above is the inverse of \$\partial \tilde g/\partial g\$.)  That
relation **is** the generating‑function prescription with
\$F(g,\tilde p)=f\_i(g),\tilde p\_i\$.

Under the transformation the β‑functions obey

$$
\tilde \beta_i(\tilde g) = \sum_j \frac{\partial \tilde g_i}{\partial g_j}
\,\beta_j\bigl(g(\tilde g)\bigr),
$$

which is exactly the textbook formula for scheme dependence — but here it is
just the chain rule applied inside a canonical map.

---

## 4 · Example: Minimal subtraction → physical subtraction in \$\phi^4\$

Take the scalar \$\phi^4\$ theory in \$d=4-\varepsilon\$.  Between the minimal
subtraction (MS) coupling \$g\$ and a physical scheme (PS) coupling \$G\$ we may
choose

$$
G \;=\; g\,[1 + a g + b g^2 + \mathcal O(g^3)].
$$

In MS, the two‑loop β‑function is

$$
\beta_{\text{MS}}(g) = -\varepsilon g + A g^2 - B g^3 + \mathcal O(g^4).
$$

Applying the canonical prescription yields

$$
\beta_{\text{PS}}(G)
  = -\varepsilon G + A G^2 -\bigl[\,B - aA\,(\varepsilon - A G)\bigr]G^3 + \mathcal O(G^4).
$$

Setting \$\varepsilon!=!0\$ (critical dimension) we see **the one‑loop
coefficient \$A\$ is invariant**; the two‑loop coefficient shifts by terms
proportional to \$a\$ but *never* changes sign, explaining why the first two
coefficients are universal.

---

## 5 · QCD teaser: “optimal” resummation

The QCD β‑series in $\overline{\text{MS}}$ is

$$
\beta_{\overline{\text{MS}}}(g)
  = -b_0 g^2 - b_1 g^3 - b_2 g^4 + \cdots.
$$

A canonical transformation of the form \$\tilde g = g,\[1 + c\_1 g]\$ turns this
into

$$
\beta_{\text{opt}}(\tilde g) = \frac{-b_0 \tilde g^2}{1 + c_1 \tilde g}
                               + \mathcal O(\tilde g^4),
$$

in which the troublesome \$b\_2\$ term is resummed into the denominator.  **How is
\$c\_1\$ fixed?**  By matching the \$\tilde g^3\$ coefficient; expanding the RHS and
comparing with the original series gives

$$
\boxed{\;c_1 = \frac{b_2}{b_1}\;}.
$$

*Footnote:* this matching is just the statement that canonical maps preserve
physics — we equate the two three‑loop coefficients and solve for \$c\_1\$.

---

## 6 · Invariants from the generating function

Given any generating function \$F\$ for a scheme change, the combination

$$
I = H_{\text{scale}}\bigl(g,p\bigr)
  - \tau\,\frac{\partial H_{\text{scale}}}{\partial \tau}
$$

Poisson‑commutes with \$H\_{\text{scale}}\$ *in every scheme* and is therefore a
**scheme‑independent conserved quantity**.  (With the minimal Ansatz, \$I\$ simply
equals the “scale energy” \$p\_i\beta\_i\$.)

More generally, if the β‑functions are a gradient, \$\beta\_i = G^{ij}\partial\_j
C(g)\$ with flat \$G^{ij}\$, the flow is **Liouville‑integrable**.  Canonical
symmetry then guarantees \$\dim(g)\$ independent integrals; the famous
Zamolodchikov \$c\$‑function in 2D CFT is one such \$C(g)\$.

---

## 7 · Scale‑dynamics toolkit

| Classical mechanics             | Scale dynamics                            |
| ------------------------------- | ----------------------------------------- |
| Symplectic form \$dq\wedge dp\$ | \$dg\wedge dp\$                           |
| Canonical map                   | Scheme change                             |
| Generating function \$F(q,P)\$  | \$F(g,\tilde p)\$ bridges regularisations |
| Hamilton–Jacobi eq.             | Relates couplings across schemes          |
| Adiabatic invariant             | Scheme‑independent integral of motion     |

---

## 8 · Research frontiers

* **Strong‑coupling tricks:** find canonical maps that accelerate convergence
  near fixed points.
* **Dualities:** test whether Seiberg‑like dualities can be recast as canonical
  transformations.
* **Exact RG:** translate Wetterich’s functional flow into canonical language
  and search for hidden integrals.
* **Quantisation of scale space:** promote \$g\$ and \$p\$ to operators; different
  schemes may correspond to ordering choices.

---

## 9 · Conclusion

Interpreting scheme changes as canonical transformations:

1. Provides a **geometric guarantee** that physics is preserved.
2. Identifies which combinations of couplings and β‑coefficients are
   **universal**.
3. Supplies practical tools for **optimising perturbative series** and exposing
   hidden structure.

Next time we’ll connect these ideas to **information geometry** and trace how
information is lost—or preserved—as we flow across scales.

---

*This series is exploratory; feedback and critiques are warmly welcomed.*
