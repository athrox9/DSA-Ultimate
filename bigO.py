#time complexity vs size complexity 
# Big O at once! 

elements = [[1,2,3],[1,2,3],[1,2,3]]

def o1(): #0(1+1) = 0(1) (constant) 
    print(elements[0]) #0(1)
    print(elements[0]) #0(1)

def on(): #0(1+n) = 0(n) (linear)
    print(elements[0]) #0(1)
    for element in elements: #0(n)
        print (element)

def on2(): #0(n²) (quadratic)
    for element in elements: #0(n)
        for n in element: #0(n)
            print(n)

# logarithmic search is more efficient than linear and quadratic - which is binary - more SCALABLE
# 1 M items, 19 comparisons - not 1M operations, reduces work by half in every step
# exponential is the opposite of the logarithmic growth 0(2^n)


