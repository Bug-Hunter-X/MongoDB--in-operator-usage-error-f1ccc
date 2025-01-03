```javascript
//Correct usage of $in operator
db.collection('users').find({ interests: { $in: ['reading', 'coding'] } });
```