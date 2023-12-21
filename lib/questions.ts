const questions: {
    id: number;
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    answer: string;
    explanation: string;
    section: number;
    Topic: number;

}[]=[
    {
        id:1, 
        question: '<p>If 3r = 18 , what is the value of 6r + 3?</p>', 
        a:'6',
        b:'27',
        c:'36',
        d:'39',
        answer:'d',
        explanation:'<p><b>Choice D is correct</b></p><p>Dividing each side of the equation 3U = 18 by 3 gives r = 6. Substituting 6 for r in the expression 6r+3 gives 6(6) + 3 = 39</p><p>Alternatively, the expression 6U + 3 can be rewritten as 2(3U) + 3. Substituting 18 for 3U in the expression 2(3U) + 3 yields 2(18) + 3, or 36 + 3 = 39.</p><p>Choice A is incorrect because 6 is the value of U; however, the question asks for the value of the expression 6U + 3. Choices B and C are incorrect because if 6U + 3 were equal to either of these values, then it would not be possible for 3U to be equal to 18, as stated in the question</p>',
        section: 1,
         Topic: 1
        },
        {
            id:2, 
            question: '<p>2x - 3y = -14</p><p>3x - 2y = -6</p><p>if (x,y) is a solution to the systems of equations above, what is the value of x - y?</p>', 
            a:'-20',
            b:'-8',
            c:'-4',
            d:'8',
            answer:'c',
            explanation:'<p><b>Choice C is correct</b></p><p>Multiplying each side of the equation 2x - 3y = -14 by 3 gives 6x - 9y = -42. Multiplying each side of the equation 3x - 2y = -6 by 2 gives 6x - 4y = 12. Then, subtracting the sides of 6x - 4y = -12. Then, subtracting the sides of 6x - 4y = -12  from the corresponding sides of 6x - 9y = -42 gives -5y = -30. Dividing each side of the equation -5y = -30 by -5 gives y = 6. Finally  substituting 6 for y in 2x-3xy = -14 gives 2x - 3(6) = -14 or x = 2. Therefore, the value of x - y is 2 - 6 = -4</p><p>Alternatively, adding the corresponding sides of 2x - 3y = -14 and 2x - 2y = -6 gives 5x - 5y = -20 from which it follows that x - y = -4</p><p>Choices A and B are incorrect and may be the result of an arithmetic error when solving the system of equations. Choice D is incorrect and the result of finding x + y  instead of x - y. </p>',
            section: 1,
             Topic: 1
            },

            {
                id:3, 
                question: '<p> Which of the following is an example of a function whose graph in the xy-plane has no x-intercepts?</p>', 
                a:'A linear function whose rate of change is not zero',
                b:'A quadratic function with real zeros',
                c:'A quadratic function with no real zeros',
                d:'A cubic polynomial with at least one real zero',
                answer:'c',
                explanation:'<p><b>Choice C is correct</b><p>If f is a function of x, then the graph of f in the xy-plane consists of all points (x, f(x)). An x-intercept is where the graph intersects the x-axis; since all points on the x-axis have y-coordinate 0, the graph of f will cross the x-axis at values of x such that f(x) = 0. Therefore, the graph of a function f will have no x-intercepts if and only if f has no real zeros. Likewise, the graph of a quadratic function with no real zeros will have no x-intercepts.</p><p></p><p>Choice A is incorrect. The graph of a linear function in the xy-plane whose rate of change is not zero is a line with a nonzero slope. The x-axis is a horizontal line and thus has slope 0, so the graph of the linear function whose rate of change is not zero is a line that is not parallel to the x-axis. Thus, the graph must intersect the x-axis at some point, and this point is an x-intercept of the graph. Choices B and D are incorrect because the graph of any function with a real zero must have an x-intercept.</p>',
                section: 1,
                 Topic: 2
                },
                {
                    id:4, 
                    question: "<p>A painter will paint n walls with the same size and shape in a building using a specific brand of paint. The painter's fee can be calculated by the expression nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. If the customer asks the painter to use a more expensive brand of paint, which of the factors in the expression would change?</p>", 
                    a:'h',
                    b:'l',
                    c:'K',
                    d:'n',
                    answer:'c',
                    explanation:"<p><b>Choice C is correct</b><p>The painter's fee is given by nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. Examining this equation shows that l and h will be used to determine the area of each wall. The variable n is the number of walls, so n times the area of each wall will give the amount of area that will need to be painted. The only remaining variable is K which represents the cost per square foot and is determined by the painter's time and the price of paint. Therefore, K is the only factor that will change if the customer asks for a more expensive brand of paint. </p><p>Choice A is incorrect because a more expensive brand of paint would not cause the height of each wall to change. Choice B is incorrect because a more expensive brand of paint would not cause the length of each wall to change. Choice D is incorrect because a more expensive brand of paint would not cause the number of walls to change. </p>",
                    section: 1,
                     Topic: 3
                    },
                    {
                        id:5, 
                        question: '<p>If 3 = 18 r , what is the value of 6 +3 r ?</p>', 
                        a:'6',
                        b:'27',
                        c:'36',
                        d:'39',
                        answer:'d',
                        explanation:'<p><b>Choice D is correct</b></p><p>Dividing each side of the equation 3U = 18 by 3 gives r = 6. Substituting 6 for r in the expression 6r+3 gives 6(6) + 3 = 39</p><p>Alternatively, the expression 6U + 3 can be rewritten as 2(3U) + 3. Substituting 18 for 3U in the expression 2(3U) + 3 yields 2(18) + 3, or 36 + 3 = 39.</p><p>Choice A is incorrect because 6 is the value of U; however, the question asks for the value of the expression 6U + 3. Choices B and C are incorrect because if 6U + 3 were equal to either of these values, then it would not be possible for 3U to be equal to 18, as stated in the question</p>',
                        section: 2,
                         Topic: 1
                        },
                        {
                            id:6, 
                            question: '<p>2x - 3y = -14</p><p>3x - 2y = -6</p><p>if (x,y) is a solution to the systems of equations above, what is the value of x - y?</p>', 
                            a:'-20',
                            b:'-8',
                            c:'-4',
                            d:'8',
                            answer:'c',
                            explanation:'<p><b>Choice D is correct</b></p><p>Multiplying each side of the equation 2x - 3y = -14 by 3 gives 6x - 9y = -42. Multiplying each side of the equation 3x - 2y = -6 by 2 gives 6x - 4y = 12. Then, subtracting the sides of 6x - 4y = -12. Then, subtracting the sides of 6x - 4y = -12  from the corresponding sides of 6x - 9y = -42 gives -5y = -30. Dividing each side of the equation -5y = -30 by -5 gives y = 6. Finally  substituting 6 for y in 2x-3xy = -14 gives 2x - 3(6) = -14 or x = 2. Therefore, the value of x - y is 2 - 6 = -4</p><p>Alternatively, adding the corresponding sides of 2x - 3y = -14 and 2x - 2y = -6 gives 5x - 5y = -20 from which it follows that x - y = -4</p><p>Choices A and B are incorrect and may be the result of an arithmetic error when solving the system of equations. Choice D is incorrect and the result of finding x + y  instead of x - y. </p>',
                            section: 2,
                             Topic: 2
                            },
                
                            {
                                id:7, 
                                question: '<p> Which of the following is an example of a function whose graph in the xy-plane has no x-intercepts?</p>', 
                                a:'A linear function whose rate of change is not zero',
                                b:'A quadratic function with real zeros',
                                c:'A quadratic function with no real zeros',
                                d:'A cubic polynomial with at least one real zero',
                                answer:'c',
                                explanation:'<p><b>Choice C is correct</b><p>If f is a function of x, then the graph of f in the xy-plane consists of all points (x, f(x)). An x-intercept is where the graph intersects the x-axis; since all points on the x-axis have y-coordinate 0, the graph of f will cross the x-axis at values of x such that f(x) = 0. Therefore, the graph of a function f will have no x-intercepts if and only if f has no real zeros. Likewise, the graph of a quadratic function with no real zeros will have no x-intercepts.</p><p></p><p>Choice A is incorrect. The graph of a linear function in the xy-plane whose rate of change is not zero is a line with a nonzero slope. The x-axis is a horizontal line and thus has slope 0, so the graph of the linear function whose rate of change is not zero is a line that is not parallel to the x-axis. Thus, the graph must intersect the x-axis at some point, and this point is an x-intercept of the graph. Choices B and D are incorrect because the graph of any function with a real zero must have an x-intercept.</p>',
                                section: 2,
                                 Topic: 3
                                },
                                {
                                    id:8, 
                                    question: "<p>A painter will paint n walls with the same size and shape in a building using a specific brand of paint. The painter's fee can be calculated by the expression nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. If the customer asks the painter to use a more expensive brand of paint, which of the factors in the expression would change?</p>", 
                                    a:'h',
                                    b:'l',
                                    c:'K',
                                    d:'n',
                                    answer:'c',
                                    explanation:"<p><b>Choice C is correct</b><p>The painter's fee is given by nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. Examining this equation shows that l and h will be used to determine the area of each wall. The variable n is the number of walls, so n times the area of each wall will give the amount of area that will need to be painted. The only remaining variable is K which represents the cost per square foot and is determined by the painter's time and the price of paint. Therefore, K is the only factor that will change if the customer asks for a more expensive brand of paint. </p><p>Choice A is incorrect because a more expensive brand of paint would not cause the height of each wall to change. Choice B is incorrect because a more expensive brand of paint would not cause the length of each wall to change. Choice D is incorrect because a more expensive brand of paint would not cause the number of walls to change. </p>",
                                    section: 2,
                                     Topic: 3
                                    },
                                     {
        id:9, 
        question: '<p>If 3r = 18 , what is the value of 6r + 3?</p>', 
        a:'6',
        b:'27',
        c:'36',
        d:'39',
        answer:'d',
        explanation:'<p><b>Choice D is correct</b></p><p>Dividing each side of the equation 3U = 18 by 3 gives r = 6. Substituting 6 for r in the expression 6r+3 gives 6(6) + 3 = 39</p><p>Alternatively, the expression 6U + 3 can be rewritten as 2(3U) + 3. Substituting 18 for 3U in the expression 2(3U) + 3 yields 2(18) + 3, or 36 + 3 = 39.</p><p>Choice A is incorrect because 6 is the value of U; however, the question asks for the value of the expression 6U + 3. Choices B and C are incorrect because if 6U + 3 were equal to either of these values, then it would not be possible for 3U to be equal to 18, as stated in the question</p>',
        section: 1,
         Topic: 1
        },
        {
            id:10, 
            question: '<p>2x - 3y = -14</p><p>3x - 2y = -6</p><p>if (x,y) is a solution to the systems of equations above, what is the value of x - y?</p>', 
            a:'-20',
            b:'-8',
            c:'-4',
            d:'8',
            answer:'c',
            explanation:'<p><b>Choice C is correct</b></p><p>Multiplying each side of the equation 2x - 3y = -14 by 3 gives 6x - 9y = -42. Multiplying each side of the equation 3x - 2y = -6 by 2 gives 6x - 4y = 12. Then, subtracting the sides of 6x - 4y = -12. Then, subtracting the sides of 6x - 4y = -12  from the corresponding sides of 6x - 9y = -42 gives -5y = -30. Dividing each side of the equation -5y = -30 by -5 gives y = 6. Finally  substituting 6 for y in 2x-3xy = -14 gives 2x - 3(6) = -14 or x = 2. Therefore, the value of x - y is 2 - 6 = -4</p><p>Alternatively, adding the corresponding sides of 2x - 3y = -14 and 2x - 2y = -6 gives 5x - 5y = -20 from which it follows that x - y = -4</p><p>Choices A and B are incorrect and may be the result of an arithmetic error when solving the system of equations. Choice D is incorrect and the result of finding x + y  instead of x - y. </p>',
            section: 1,
             Topic: 1
            },

            {
                id:11, 
                question: '<p> Which of the following is an example of a function whose graph in the xy-plane has no x-intercepts?</p>', 
                a:'A linear function whose rate of change is not zero',
                b:'A quadratic function with real zeros',
                c:'A quadratic function with no real zeros',
                d:'A cubic polynomial with at least one real zero',
                answer:'c',
                explanation:'<p><b>Choice C is correct</b><p>If f is a function of x, then the graph of f in the xy-plane consists of all points (x, f(x)). An x-intercept is where the graph intersects the x-axis; since all points on the x-axis have y-coordinate 0, the graph of f will cross the x-axis at values of x such that f(x) = 0. Therefore, the graph of a function f will have no x-intercepts if and only if f has no real zeros. Likewise, the graph of a quadratic function with no real zeros will have no x-intercepts.</p><p></p><p>Choice A is incorrect. The graph of a linear function in the xy-plane whose rate of change is not zero is a line with a nonzero slope. The x-axis is a horizontal line and thus has slope 0, so the graph of the linear function whose rate of change is not zero is a line that is not parallel to the x-axis. Thus, the graph must intersect the x-axis at some point, and this point is an x-intercept of the graph. Choices B and D are incorrect because the graph of any function with a real zero must have an x-intercept.</p>',
                section: 1,
                 Topic: 2
                },
                {
                    id:12, 
                    question: "<p>A painter will paint n walls with the same size and shape in a building using a specific brand of paint. The painter's fee can be calculated by the expression nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. If the customer asks the painter to use a more expensive brand of paint, which of the factors in the expression would change?</p>", 
                    a:'h',
                    b:'l',
                    c:'K',
                    d:'n',
                    answer:'c',
                    explanation:"<p><b>Choice C is correct</b><p>The painter's fee is given by nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. Examining this equation shows that l and h will be used to determine the area of each wall. The variable n is the number of walls, so n times the area of each wall will give the amount of area that will need to be painted. The only remaining variable is K which represents the cost per square foot and is determined by the painter's time and the price of paint. Therefore, K is the only factor that will change if the customer asks for a more expensive brand of paint. </p><p>Choice A is incorrect because a more expensive brand of paint would not cause the height of each wall to change. Choice B is incorrect because a more expensive brand of paint would not cause the length of each wall to change. Choice D is incorrect because a more expensive brand of paint would not cause the number of walls to change. </p>",
                    section: 1,
                     Topic: 3
                    },
                    {
                        id:13, 
                        question: '<p>If 3 = 18 r , what is the value of 6 +3 r ?</p>', 
                        a:'6',
                        b:'27',
                        c:'36',
                        d:'39',
                        answer:'d',
                        explanation:'<p><b>Choice D is correct</b></p><p>Dividing each side of the equation 3U = 18 by 3 gives r = 6. Substituting 6 for r in the expression 6r+3 gives 6(6) + 3 = 39</p><p>Alternatively, the expression 6U + 3 can be rewritten as 2(3U) + 3. Substituting 18 for 3U in the expression 2(3U) + 3 yields 2(18) + 3, or 36 + 3 = 39.</p><p>Choice A is incorrect because 6 is the value of U; however, the question asks for the value of the expression 6U + 3. Choices B and C are incorrect because if 6U + 3 were equal to either of these values, then it would not be possible for 3U to be equal to 18, as stated in the question</p>',
                        section: 2,
                         Topic: 1
                        },
                        {
                            id:14, 
                            question: '<p>2x - 3y = -14</p><p>3x - 2y = -6</p><p>if (x,y) is a solution to the systems of equations above, what is the value of x - y?</p>', 
                            a:'-20',
                            b:'-8',
                            c:'-4',
                            d:'8',
                            answer:'c',
                            explanation:'<p><b>Choice D is correct</b></p><p>Multiplying each side of the equation 2x - 3y = -14 by 3 gives 6x - 9y = -42. Multiplying each side of the equation 3x - 2y = -6 by 2 gives 6x - 4y = 12. Then, subtracting the sides of 6x - 4y = -12. Then, subtracting the sides of 6x - 4y = -12  from the corresponding sides of 6x - 9y = -42 gives -5y = -30. Dividing each side of the equation -5y = -30 by -5 gives y = 6. Finally  substituting 6 for y in 2x-3xy = -14 gives 2x - 3(6) = -14 or x = 2. Therefore, the value of x - y is 2 - 6 = -4</p><p>Alternatively, adding the corresponding sides of 2x - 3y = -14 and 2x - 2y = -6 gives 5x - 5y = -20 from which it follows that x - y = -4</p><p>Choices A and B are incorrect and may be the result of an arithmetic error when solving the system of equations. Choice D is incorrect and the result of finding x + y  instead of x - y. </p>',
                            section: 2,
                             Topic: 2
                            },
                
                            {
                                id:15, 
                                question: '<p> Which of the following is an example of a function whose graph in the xy-plane has no x-intercepts?</p>', 
                                a:'A linear function whose rate of change is not zero',
                                b:'A quadratic function with real zeros',
                                c:'A quadratic function with no real zeros',
                                d:'A cubic polynomial with at least one real zero',
                                answer:'c',
                                explanation:'<p><b>Choice C is correct</b><p>If f is a function of x, then the graph of f in the xy-plane consists of all points (x, f(x)). An x-intercept is where the graph intersects the x-axis; since all points on the x-axis have y-coordinate 0, the graph of f will cross the x-axis at values of x such that f(x) = 0. Therefore, the graph of a function f will have no x-intercepts if and only if f has no real zeros. Likewise, the graph of a quadratic function with no real zeros will have no x-intercepts.</p><p></p><p>Choice A is incorrect. The graph of a linear function in the xy-plane whose rate of change is not zero is a line with a nonzero slope. The x-axis is a horizontal line and thus has slope 0, so the graph of the linear function whose rate of change is not zero is a line that is not parallel to the x-axis. Thus, the graph must intersect the x-axis at some point, and this point is an x-intercept of the graph. Choices B and D are incorrect because the graph of any function with a real zero must have an x-intercept.</p>',
                                section:2,
                                 Topic: 3
                                },
                                {
                                    id:16, 
                                    question: "<p>A painter will paint n walls with the same size and shape in a building using a specific brand of paint. The painter's fee can be calculated by the expression nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. If the customer asks the painter to use a more expensive brand of paint, which of the factors in the expression would change?</p>", 
                                    a:'h',
                                    b:'l',
                                    c:'K',
                                    d:'n',
                                    answer:'c',
                                    explanation:"<p><b>Choice C is correct</b><p>The painter's fee is given by nKlh, where n is the number of walls, K is a constant with units of dollars per square foot, l is the length of each wall in feet, and h is the height of each wall in feet. Examining this equation shows that l and h will be used to determine the area of each wall. The variable n is the number of walls, so n times the area of each wall will give the amount of area that will need to be painted. The only remaining variable is K which represents the cost per square foot and is determined by the painter's time and the price of paint. Therefore, K is the only factor that will change if the customer asks for a more expensive brand of paint. </p><p>Choice A is incorrect because a more expensive brand of paint would not cause the height of each wall to change. Choice B is incorrect because a more expensive brand of paint would not cause the length of each wall to change. Choice D is incorrect because a more expensive brand of paint would not cause the number of walls to change. </p>",
                                    section:2,
                                     Topic: 3
                                    },
]

 
export default questions