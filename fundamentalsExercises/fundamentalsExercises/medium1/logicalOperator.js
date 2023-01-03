/*
What will each line of the following code return?
Don't run the code until after you have tried to answer.
*/

(false && undefined);                           // false
(false || undefined);                           // undefined
((false && undefined) || (false || undefined)); // undefined
// becomes (false) || (undefined)

((false || undefined) || (false && undefined)); // false
// becomes (undefined || false)

((false && undefined) && (false || undefined)); // false
// becomes (false && undefined)

((false || undefined) && (false && undefined)); // undefined
// becomes (undefined && false)

('a' || (false && undefined) || '');            // 'a'
// becomes 'a' || false

((false && undefined) || 'a' || '');            // 'a'
// becomes (false || 'a' || '' )

('a' && (false || undefined) && '');            // undefined
// becomes ('a' && undefined && '')

((false || undefined) && 'a' && '');            // undefined
// becomes undefined && 'a' && ''

/*
LS Solution:
false
undefined
undefined
false
false
undefined
"a"
"a"
undefined
undefined

The logical AND (&&) and logical OR (||) operators do not always
return a boolean value. They return the value of one of their operands
(i.e., the expressions being compared), which may be a non-boolean value
such as shown above. You can learn more about the logical operator rules on MDN.

The return value of a logical expression can be determined by iteratively
evaluating the expression from left to right until it results in a single
value. For example:

((false && undefined) || 'a' || '');
(false || 'a' || '');
('a' || '');
('a');

------

('a' && (false || undefined) && '');
('a' && undefined && '');
(undefined && '');
(undefined);

------

((false || undefined) || (false && undefined));
(undefined || false);
(false);

*/