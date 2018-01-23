"""
    plaguerre(x,n) 

Define the radial phase-space probability distribution for sampling a fock state in the
`+W` representation, where the probability density is
```math
P(x,n) \\equiv \\frac{4}{3^{n+1}}\\exp{(-2x^2/3)}xL_n(-4x^2/3)
```

`x`: location to evaluate probability.

`n`: the number of the fock state.

"""
function plaguerre(x,n)
    #helper function for +W Fock state
    #P(x,n)=(4/3)*exp(-2*x^2/3)*x*laguerre(-4*x^2/3,n)/(3^n)
    return (4/3)*exp(-2*x^2/3 + log(x) + log(laguerren(-4*x^2/3,n)) - n*log(3))
end
