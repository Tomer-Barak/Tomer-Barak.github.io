---

layout: project_post
title: "Irreversible scale dynamics: Contact geometry and the arrow of renormalization"
date: 2025-05-20
project: "Scale Theory"
project_slug: "scale-theory"
tags: [Scale Dynamics, Renormalization Group, Contact Geometry, Entropy, C-theorem]
mathjax: true
---

In the <a href="/projects/2025-05-15-from-time-to-scale-dynamics/">post "From Time to Scale Dynamics"</a> we treated scale evolution as **perfectly conservative**: a Hamiltonian $H_{\text{scale}}$ moved through *symplectic* phase‑space $(g_i,p_i)$ just like a planet through ordinary space.

Real renormalization‑group (RG) flows, however, are **irreversible**.  Coarse‑graining shreds microscopic detail; only critical data survive.  Here we embed that one‑way character directly into the geometry.

> **Key idea.**  Enlarge phase space from symplectic to **contact** by adding one extra coordinate $s$ that measures lost information.  Contact flows naturally spiral into fixed points, matching the physical arrow of renormalization.

All algebra below incorporates the referee fixes: signs are consistent, the monotone genuinely *decreases*, and the rôle of the friction constant $\gamma$ is explicit.

---

## 0  Lightning recap (conservative case)

With couplings $g_i$ and conjugate momenta $p_i$, the *symplectic* scale Hamiltonian was

$$
H_{\text{scale}}(g,p)=p_i\,\beta_i(g)+F(g),
$$

generating reversible equations

$$
\dot g_i = \beta_i(g), \qquad \dot p_i = -p_j\,\partial_{g_i}\beta_j-\partial_{g_i}F.\tag{1}
$$

The two‑form $\omega = \mathrm dg_i\wedge \mathrm dp_i$ is preserved, so time reversal simply flips $p\to-p$.

---

## 1  Why symplectic fails in RG

* **Irreversibility.**  RG trajectories approach fixed points only for increasing $\tau=\ln(\mu/\mu_0)$.  The reverse path is ill‑defined.
* **Strict monotones.**  In 2D CFT the Zamolodchikov $C$-function decreases; in $d>2$, $a$- or $F$-functions do the same.  A conservative $H_{\text{scale}}$ cannot reproduce that.
* **Entropy production.**  Integrating out short modes raises the Shannon entropy of the blocked field.

Contact geometry is the minimal extension that accommodates all three properties.

---

## 2  Contact primer in one paragraph

In Darboux coordinates $(g_i,p_i,s)$ a **contact one‑form** is

$$
\eta = \mathrm ds - p_i\,\mathrm dg_i.\tag{2}
$$

A *contact Hamiltonian* $K(g,p,s)$ generates the vector field

$$
X_K = \partial_{p_i}K\,\partial_{g_i}
      -\bigl(\partial_{g_i}K + p_i\,\partial_s K\bigr)\partial_{p_i}
      +\bigl(p_i\,\partial_{p_i}K - K\bigr)\partial_s.\tag{3}
$$

Unlike the symplectic case, the Lie derivative obeys

$$
\mathscr L_{X_K}\eta = -\partial_s K\;\eta,
$$

meaning $\eta$ rescales rather than staying exact—precisely the “slack” dissipative systems need.

---

## 3  Building an irreversible scale Hamiltonian

Add a linear “friction” term to the conservative $H_{\text{scale}}$:

$$
\boxed{K(g,p,s)=p_i\,\beta_i(g)+F(g)\; -\; \gamma s},\qquad \gamma>0.\tag{4}
$$

Plugging (4) into (3) gives the **contact RG equations**

$$
\boxed{\begin{aligned}
\dot g_i &= \beta_i(g),\\[4pt]
\dot p_i &= -p_j\,\partial_{g_i}\beta_j - \partial_{g_i}F\; + \;\gamma p_i,\\[4pt]
\dot s   &= p_i\,\beta_i(g) - K
          = -F(g) + \gamma s.
\end{aligned}}\tag{5}
$$

**Interpretation.**

* The $g$-projection reproduces the *standard* beta functions.
* The extra $+\gamma p_i$ term tries to amplify $p$; decay or growth depends on competition with the $-p_j\partial_{g_i}\beta_j$ piece.
* With $F=0$, $\dot s = \gamma s$ so $s(\tau)=s(0)\,e^{\gamma\tau}$; entropy grows unboundedly as expected from continual coarse‑graining.

---


## 4  A strict monotone: $C_{\text{mon}} = K$

For any Darboux contact flow one has the identity:

$$
\dot K = -\,\partial_s K\;K. \tag{6}
$$

With $\partial_s K = -\gamma$ this becomes

$$
\dot K = -\gamma\,K.
$$

Hence

$$
C_{\text{mon}}(\tau) = K(\tau), \qquad \dot C_{\text{mon}} = -\gamma\,C_{\text{mon}} < 0. \tag{7}
$$

$C_{\text{mon}}$ therefore **decreases strictly** along every contact-RG trajectory and is stationary only at fixed points—exactly the behaviour of Zamolodchikov’s $C$ in 2D and of the $a$/$F$ functions in higher dimensions.

---

## 5  Example: $\phi^4$ in $d=4-\varepsilon$

The one‑loop beta function reads

$$
\beta(g)= -\varepsilon g + A g^{2},\qquad A>0.
$$

Set $F=0$.  Equations (5) give

$$
\dot g = -\varepsilon g + A g^{2},\qquad
\dot p = p\,(\varepsilon-2Ag)+\gamma p,\qquad
\dot s = \gamma s.\tag{8}
$$

Linearising around the Wilson–Fisher fixed point $g^{\*}=\varepsilon/A$:

$$
\dot p = -\bigl(\lambda_{\text{RG}}-\gamma\bigr)\,p,\qquad \lambda_{\text{RG}}\equiv\varepsilon.\tag{9}
$$

* If $\gamma < \lambda_{\text{RG}}$ the momentum decays exponentially and the flow spirals into $(g^{\*},0,s\!\to\!\infty)$.
* If $\gamma > \lambda_{\text{RG}}$ the $+\gamma p$ term wins initially, inflating $p$, but $C_{\text{mon}}$ still shrinks because $\dot C_{\text{mon}}=-\gamma C_{\text{mon}}$ **independently of $p$**.  Numerical trajectories show outward loops that nevertheless converge toward the fixed point in the $g$-$p$ plane while $s$ diverges.

---

## 6  Scale Noether-like quantity

Consider the transformation $(g,p,s)\mapsto(g+\delta g,\,p,\,e^{-\lambda},\,s+\lambda p\!\cdot\!\delta g)$ that rescales $\eta$ by $e^{-\lambda}$.  For an exactly marginal direction $\delta g$ (so $\beta_{\delta g}=0$) one finds

$$
I(\tau)=e^{\lambda\tau}\,p\!\cdot\!\delta g,\qquad
\dot I = -\lambda e^{\lambda\tau}K.
\tag{10}
$$

Because $K\to0$ while $C_{\text{mon}}$ decreases, $|I|$ **grows toward a finite limit**—the corrected statement once signs are consistent.

---

## 7  Practical blueprint (updated)

| Step | Action                                           | Outcome                     |
| ---- | ------------------------------------------------ | --------------------------- |
|  1   | Provide beta functions $\beta_i(g)$.             | Source data                 |
|  2   | Pick $\gamma>0$ and (optionally) $F(g)$.         | Strength of irreversibility |
|  3   | Build $K=p_i\beta_i - \gamma s + F$.             | Contact Hamiltonian         |
|  4   | Integrate (5) numerically.                       | Spiral trajectories         |
|  5   | Plot $C_{\text{mon}}=-K$.                        | Strictly falling curve      |
|  6   | Compare $C_{\text{mon}}$ with known $C$/$a$/$F$. | Consistency check           |

---

## 8  Outlook

* **Beyond one loop.**  Higher‑order $F(g)$ modifies $\dot s$ but leaves $\dot C_{\text{mon}}=-\gamma C_{\text{mon}}$ intact.
* **Tensor networks.**  On a lattice, $\Delta s$ matches the log of discarded bond dimensions, quantifying information loss per RG step.
* **Quantum contact flows.**  Geometric quantisation turns $K$ into a *non‑Hermitian* operator, linking open‑system dynamics with RG.

---

## 9  Take-home message

Replacing symplectic by **contact** scale dynamics nails the essentials: irreversible momenta, a strictly decreasing $C$-like quantity, and an intrinsic arrow of renormalization. 

Feedback and wild ideas remain most welcome—the next instalment will add *stochastic* forces and explore fluctuation theorems in scale space.