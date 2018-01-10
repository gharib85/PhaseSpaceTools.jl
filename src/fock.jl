"""
```julia
a,ā = fock(n,N;dist)
```
Sample the phase-space distribution for a Fock state

`n` is number of fock state.

`N` is number of samples.

Distribution `dist` can be either `W`, `+W`, or `+P`(default).
"""
function fock(n,N;dist="+P")
if dist=="+P"
    γ = (randn(N)+im*randn(N))/sqrt(2)
    d = Gamma(n+1,1)
    z = rand(d,N)
    μ = sqrt.(z).*exp.(2π*im*rand(N))
    α = μ + γ
    ᾱ = conj(μ - γ)
    return α, ᾱ
elseif dist=="W"
    p = 0.5*sqrt(2*n+1+2*sqrt(n^2+n))
    q = 1/(4*p)
    α = (p + q*randn(N)).*exp.(2π*im*rand(N))
    ᾱ = conj(α)
    return α,ᾱ
elseif dist=="+W"
    if n<=320
    γ = (randn(N)+im*randn(N))/sqrt(2)
    x1= max(0,sqrt(n)-5); x2 = sqrt(n)+5
    (n==0||n==1) ? Pmax=0.71 : Pmax=0.6
    z = reject(x->plaguerre.(x,n),[x1,x2],N,Pmax)
    μ = z.*exp.(2π*im*rand(N))
    α = μ + γ
    ᾱ = conj(μ - γ)
    return α, ᾱ
    else
    γ = (randn(N)+im*randn(N))/sqrt(2)
    x1= max(0,sqrt(n)-5); x2 = sqrt(n)+5
    z = reject(x->plaguerre_asymptotic.(x,n),[x1,x2],N,0.6)
    μ = z.*exp.(2π*im*rand(N))
    α = μ + γ
    ᾱ = conj(μ - γ)
    return α, ᾱ
    end
else error("distribution not implemented")
end
end
