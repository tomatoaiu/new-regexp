# Proposal1 

## Minimum requirements
- Can be defined by variable
- High readability

## Usage
```javascript
import regexp from 'new-regexp';

const reg = regexp.language('english');

'1234abc56DEF'.match(reg); // abcDEF
```


```javascript
import regexp from 'new-regexp';

const reg = regexp.language('english')
                  .and()
                  .number();

'1234abc56DEF'.match(reg); // 1234abc56DEF
```


```javascript
import regexp from 'new-regexp';

const reg = regexp.and(
  regexp.language('english'),
  regexp.num()
)

'1234abc56DEF'.match(reg); // 1234abc56DEF
```
