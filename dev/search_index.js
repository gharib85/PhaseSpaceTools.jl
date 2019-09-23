var documenterSearchIndex = {"docs":
[{"location":"phasespace/#Phase-Space-1","page":"Introduction to Phase Space","title":"Phase Space","text":"","category":"section"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"For systems of Bose particles, the most important states are coherent states. These states allow representation of a large class of dynamical quantum evolution in terms of equivalent stochastic processes.","category":"page"},{"location":"phasespace/#Fock-states-1","page":"Introduction to Phase Space","title":"Fock states","text":"","category":"section"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"Coherent states may be represented in terms of Fock states. For a single mode, these are just eigenstates of the number operator a^dagger a, satisfying","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"a^dagger anrangle = nnrangle","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"and these states are orthonormal langle nmrangle = delta_nm.","category":"page"},{"location":"phasespace/#Coherent-states-1","page":"Introduction to Phase Space","title":"Coherent states","text":"","category":"section"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"Coherent states play a central role in quantum phase space methods, providing a mapping of many-body boson dynamics to equivalent stochastic differential equations.","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"For a single bosonic mode, with creation and destruction operators a^dagger, and a, with commutator aa^dagger=1, the coherent states are eigenstates of the annihilation operator","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"aalpharangle =alphaalpharangle","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"where alphain mathbbC can vary over the complex plane and plays the role of a classical amplitude.","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"In terms of Fock states, the coherent states take the form","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"alpharangle = e^-alpha^22sum_n=0^infty fracalpha^nsqrtnnrangle","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"These states are overcomplete, with resolution of the identity","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"mathbb1 = frac1piint d^2alpha alpharanglelanglealpha","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"This property is responsible for much of the practical utility of coherent states, furnishing a mapping from quantum operators in Hilbert space to differential operators in phase space.","category":"page"},{"location":"phasespace/#Glauber-Sudarshan-P-representation-1","page":"Introduction to Phase Space","title":"Glauber-Sudarshan P-representation","text":"","category":"section"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"One of the most well-known representations is the Glauber-Sudarshan P-representation (for brevity here called the Glauber-P). For a single mode optical field, the representation of the density matrix is given by","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"rho = int d^2alpha alpharanglelanglealphaP(alphaalpha^*)","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"where the integral is taken over the entire complex plane. The Glauber-P representation occurs in a single complex variable phase space, as seen from the expansion over diagonal coherent state projectors.","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"In the P-representation a coherent state may be sampled as a single point on the complex plane","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"N = 10000\nstate = Coherent(12.0)\nα,ᾱ = glauberP(state,N)","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"In any other distribution the coherent state is more interesting to sample.","category":"page"},{"location":"phasespace/#Positive-P-representation-1","page":"Introduction to Phase Space","title":"Positive-P representation","text":"","category":"section"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"In the Positive-P representation the simples way to sample the state is again as a point on the complex plane","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"α,ᾱ = positiveP(state,N)","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"Here αα are once again complex conjugates. However, we emphasize that this is no longer the case in any subsequent dynamical evolution of the ensemble of phase space points. Furthermore, unlike the Glauber-P distribution, the positive-P distribution for a particular quantum state is not unique.","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"In this package we primarily focus on single mode problems, taking the general approach of sampling the Husimi-Q funcion, and then exploiting a simple convolutional relationship between the Husimi-Q and a particular choice of positive-P representation.","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"Once choice of positive-P that can be made for any single mode density matrix is given by","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"P(alphabaralpha) = frac14pi^2langle (alpha+baralpha^*)2rho(alpha+baralpha^*)2rangle e^-alpha-baralpha^*^24","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"We can then use the transformation","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"mu = (alpha+baralpha^*)2quadquadgamma = (alpha-baralpha^*)2","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"with inverse","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"alpha = mu + gammaquadquad baralpha = mu^* - gamma^*","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"The problem reduces to that of sampling the  distribution","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"P(mugamma)=Q(mumu^*)frace^-gamma^2pi","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"where","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"Q(alphaalpha^*)equiv fraclangle alpharhoalpharanglepi","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"is the Husimi-Q representation, and the remaining complex Gaussian distribution is readily sampled as","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"gamma = frac1sqrt2left(eta_1+ieta_2right)","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"Here eta_j are independent normal random variates with zero mean and unit variance:","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"langle eta_j rangle = 0quadquad langle eta_ieta_jrangle =delta_ij","category":"page"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"Normally distributed Gaussian variates are sampled using randn().","category":"page"},{"location":"phasespace/#Husimi-Q-representation-1","page":"Introduction to Phase Space","title":"Husimi-Q representation","text":"","category":"section"},{"location":"phasespace/#","page":"Introduction to Phase Space","title":"Introduction to Phase Space","text":"The Husimi-Q representation","category":"page"},{"location":"phasespace/#Wigner-representation-1","page":"Introduction to Phase Space","title":"Wigner representation","text":"","category":"section"},{"location":"sdes/#Solving-SDEs-1","page":"Solving SDES","title":"Solving SDEs","text":"","category":"section"},{"location":"sdes/#Noises-1","page":"Solving SDES","title":"Noises","text":"","category":"section"},{"location":"sdes/#randnc-1","page":"Solving SDES","title":"randnc","text":"","category":"section"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"randnc","category":"page"},{"location":"sdes/#PhaseSpaceTools.randnc","page":"Solving SDES","title":"PhaseSpaceTools.randnc","text":"a = randnc(N...)\n\nReturns an array of dimension length(N), containing samples of complex random variables with mean zero and variance one:\n\nlangle a^2rangle = 1 quadquadlangle a^2rangle = langle (a^*) ^2rangle = 0\n\nUseful for creating a range of noises that show up in phase-space simulations.\n\nUsage:\n\na = randnc(10) returns a 10-element Array{Complex{Float64},1}.\n\na = randnc(50,100) returns a 50x100-element Array{Complex{Float64},2}.\n\n\n\n\n\n","category":"function"},{"location":"sdes/#realnoise-1","page":"Solving SDES","title":"realnoise","text":"","category":"section"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"realnoise","category":"page"},{"location":"sdes/#PhaseSpaceTools.realnoise","page":"Solving SDES","title":"PhaseSpaceTools.realnoise","text":"Complex variable SDE's in DifferentialEquations.jl have complex noises by default dispatch on complex fields. This method defines a real noise for use with the library.\n\n\n\n\n\n","category":"function"},{"location":"sdes/#realbridge-1","page":"Solving SDES","title":"realbridge","text":"","category":"section"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"realbridge","category":"page"},{"location":"sdes/#PhaseSpaceTools.realbridge","page":"Solving SDES","title":"PhaseSpaceTools.realbridge","text":"Complex variable SDE's in DifferentialEquations.jl have complex noises by default dispatch on complex fields. This method defines a real brownian bridge for use with the library.\n\n\n\n\n\n","category":"function"},{"location":"sdes/#Complex-noise-example-1","page":"Solving SDES","title":"Complex noise example","text":"","category":"section"},{"location":"sdes/#Real-noise-example-1","page":"Solving SDES","title":"Real noise example","text":"","category":"section"},{"location":"sdes/#Recovering-normal-order-from-Wigner-ensemble-averages-1","page":"Solving SDES","title":"Recovering normal order from Wigner ensemble averages","text":"","category":"section"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"A common approach to quantum phase space simulations involves performing truncated Wigner simulations, allowing symmetrically ordered operator averages. However, in experiments, the physically measurable moments are usually those in normal order. We can recover normal order for an operator average of a given degree if we have access to all symmetrically ordered operator averages up to the same degree.","category":"page"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"One can derive the following useful relationship between normal- and symmetrically-ordered operator averages","category":"page"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"langle (a^dagger)^p a^qrangle = sum_n=0^textrmmin(pq)frac(-1)^nn2^nbinompnbinomqnlangle (a^dagger)^p-na^q-n_textrmsymrangle","category":"page"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"The relationship between normal ordered operator averages and ensemble averages of Wigner trajectories, denoted by overlineleft(dotsright)_W is","category":"page"},{"location":"sdes/#","page":"Solving SDES","title":"Solving SDES","text":"langle (a^dagger)^p a^qrangle = sum_n=0^textrmmin(pq)frac(-1)^nn2^nbinompnbinomqnoverlineleft((alpha^*)^p-nalpha^q-nright)_W","category":"page"},{"location":"distributions/#Distributions-1","page":"Distributions","title":"Distributions","text":"","category":"section"},{"location":"distributions/#","page":"Distributions","title":"Distributions","text":"The phase-space distributions that may be sampled for these states are","category":"page"},{"location":"distributions/#Husimi-Q-1","page":"Distributions","title":"Husimi-Q","text":"","category":"section"},{"location":"distributions/#","page":"Distributions","title":"Distributions","text":"husimiQ","category":"page"},{"location":"distributions/#PhaseSpaceTools.husimiQ","page":"Distributions","title":"PhaseSpaceTools.husimiQ","text":"α,ᾱ = husimiQ(state <: State,N)\n\nGenerate N samples from the Husimi-Q phase-space distribution for state.\n\nMoments of the Husimi-Q distribution generate quantum operator averages that are anti-normally ordered.\n\n\n\n\n\n","category":"function"},{"location":"distributions/#Glauber-P-1","page":"Distributions","title":"Glauber-P","text":"","category":"section"},{"location":"distributions/#","page":"Distributions","title":"Distributions","text":"glauberP","category":"page"},{"location":"distributions/#PhaseSpaceTools.glauberP","page":"Distributions","title":"PhaseSpaceTools.glauberP","text":"α,ᾱ = glauberP(state <: State,N)\n\nGenerate N samples from the Glauber-Sudarshan-P phase-space distribution for state.\n\nMoments of the Glauber-Sudarshan-P distribution generate quantum operator averages that are normally ordered.\n\n\n\n\n\n","category":"function"},{"location":"distributions/#Positive-P-1","page":"Distributions","title":"Positive-P","text":"","category":"section"},{"location":"distributions/#","page":"Distributions","title":"Distributions","text":"positiveP","category":"page"},{"location":"distributions/#PhaseSpaceTools.positiveP","page":"Distributions","title":"PhaseSpaceTools.positiveP","text":"α,ᾱ = positiveP(state <: State,N)\n\nGenerate N samples from the positive-P phase-space distribution for state.\n\nMoments of the positive-P distribution generate quantum operator averages that are normally ordered.\n\n\n\n\n\n","category":"function"},{"location":"distributions/#Wigner-1","page":"Distributions","title":"Wigner","text":"","category":"section"},{"location":"distributions/#","page":"Distributions","title":"Distributions","text":"wigner","category":"page"},{"location":"distributions/#PhaseSpaceTools.wigner","page":"Distributions","title":"PhaseSpaceTools.wigner","text":"α,ᾱ = wigner(state <: State,N)\n\nGenerate N samples from wigner phase-space distribution for state.\n\nMoments of the Wigner distribution generate symmetrically ordered quantum operator averages.\n\n\n\n\n\n","category":"function"},{"location":"distributions/#Positive-W-1","page":"Distributions","title":"Positive-W","text":"","category":"section"},{"location":"distributions/#","page":"Distributions","title":"Distributions","text":"positiveW","category":"page"},{"location":"distributions/#PhaseSpaceTools.positiveW","page":"Distributions","title":"PhaseSpaceTools.positiveW","text":"α,ᾱ = positiveW(state <: State,N)\n\nGenerate N samples from the positive-W phase-space distribution for state.\n\nImplemented states are\n\nFock(N)\n\nThe moments of the positive-W distribution generate quantum operator averages that are symmmetrically ordered.\n\n\n\n\n\n","category":"function"},{"location":"states/#Quantum-states-1","page":"Quantum States","title":"Quantum states","text":"","category":"section"},{"location":"states/#","page":"Quantum States","title":"Quantum States","text":"Quantum states available in PhaseSpaceTools.jl are","category":"page"},{"location":"states/#Coherent-1","page":"Quantum States","title":"Coherent","text":"","category":"section"},{"location":"states/#","page":"Quantum States","title":"Quantum States","text":"Coherent","category":"page"},{"location":"states/#PhaseSpaceTools.Coherent","page":"Quantum States","title":"PhaseSpaceTools.Coherent","text":"Coherent(β)\n\nCreate a coherent state with complex amplitude β.\n\n\n\n\n\n","category":"type"},{"location":"states/#Fock-1","page":"Quantum States","title":"Fock","text":"","category":"section"},{"location":"states/#","page":"Quantum States","title":"Quantum States","text":"Fock","category":"page"},{"location":"states/#PhaseSpaceTools.Fock","page":"Quantum States","title":"PhaseSpaceTools.Fock","text":"Fock(n)\n\nCreate a Fock state for particle number n.\n\n\n\n\n\n","category":"type"},{"location":"states/#Crescent-1","page":"Quantum States","title":"Crescent","text":"","category":"section"},{"location":"states/#","page":"Quantum States","title":"Quantum States","text":"Crescent","category":"page"},{"location":"states/#PhaseSpaceTools.Crescent","page":"Quantum States","title":"PhaseSpaceTools.Crescent","text":"Crescent(β,ϵ,q)\n\nCreate a Cresecent state with parameters β, ϵ, q.\n\n\n\n\n\n","category":"type"},{"location":"states/#Squeezed-1","page":"Quantum States","title":"Squeezed","text":"","category":"section"},{"location":"states/#","page":"Quantum States","title":"Quantum States","text":"Squeezed","category":"page"},{"location":"states/#PhaseSpaceTools.Squeezed","page":"Quantum States","title":"PhaseSpaceTools.Squeezed","text":"Squeezed(β,ϵ)\n\nCreate a Squeezed state with parameters β, ϵ.\n\n\n\n\n\n","category":"type"},{"location":"states/#Thermal-1","page":"Quantum States","title":"Thermal","text":"","category":"section"},{"location":"states/#","page":"Quantum States","title":"Quantum States","text":"Thermal","category":"page"},{"location":"states/#PhaseSpaceTools.Thermal","page":"Quantum States","title":"PhaseSpaceTools.Thermal","text":"Thermal(β,n̄)\n\nCreate a Thermal state with parameters β, n̄.\n\n\n\n\n\n","category":"type"},{"location":"states/#Bogoliubov-1","page":"Quantum States","title":"Bogoliubov","text":"","category":"section"},{"location":"states/#","page":"Quantum States","title":"Quantum States","text":"Bogoliubov","category":"page"},{"location":"states/#PhaseSpaceTools.Bogoliubov","page":"Quantum States","title":"PhaseSpaceTools.Bogoliubov","text":"Bogoliubov(u,v,n̄)\n\nCreate a Bogoliubov state with parameters u, v, n̄.\n\n\n\n\n\n","category":"type"},{"location":"#Overview-1","page":"Overview","title":"Overview","text":"","category":"section"},{"location":"#","page":"Overview","title":"Overview","text":"This package provides sampling methods for commonly used quantum states in various quantum phase-space representations. These include Glauber-Sudarshan-P, Positive-P, Husimi-Q, and Wigner representations.","category":"page"},{"location":"#","page":"Overview","title":"Overview","text":"There are also convenience methods for calculating operator averages from phase-space averages, and for sampling noises for solving SDEs using DifferentialEquations.jl.","category":"page"},{"location":"#Installation-1","page":"Overview","title":"Installation","text":"","category":"section"},{"location":"#","page":"Overview","title":"Overview","text":"In the julia REPL","category":"page"},{"location":"#","page":"Overview","title":"Overview","text":"julia> ]add https://github.com/AshtonSBradley/PhaseSpaceTools.jl\n\nPkg> test PhaseSpaceTools","category":"page"},{"location":"#Reference-1","page":"Overview","title":"Reference","text":"","category":"section"},{"location":"#","page":"Overview","title":"Overview","text":"If you find this package useful, please cite","category":"page"},{"location":"#","page":"Overview","title":"Overview","text":"M. K. Olsen, A. S. Bradley, Numerical representation of quantum states in the positive-P and Wigner representations, Optics Communications 282, 3924-3929 (2009).","category":"page"},{"location":"#","page":"Overview","title":"Overview","text":"A full erratum is given in this SciPost Commentary.","category":"page"}]
}
