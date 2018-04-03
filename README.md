# JavaScript to flatten JSON down to a single column entity

* Allows for the normalization of JSON down to a single column entity.
* Helpful for reducing space, speeding up searching, etc.

## Original JSON
```javascript
{
  "firstName": "John",
  "lastName": "Adams",
  "id" : 4122,
  "address" : {
    "street": "500 Hancock St.", 
    "city": "Quincy", 
    "state": "MA", 
    "postalCode": "02169"
  }
  ,
  "contact" : 
  [ 
    {
      "mobile": "617-555-1212", 
    },
    {
      "home": "617-555-2000",
    },
    {
      "social" :
      [
        {
          "linkedin" : "https://www.linkedin.com/in/jadamsfoundingfather/",
          "twitter" : "@johnadamsfounddingfather",
          "email" : "johndams@foundingfathers.com",
          "medium" : "@johnadams",
          "github" : "https://www.github.com/jadamsfoundingfather"
        }
      ]
    }
  ]
}
```

## Final JSON
```
{ firstName: 'John',
  lastName: 'Adams',
  id: 4122,
  'address.street': '500 Hancock St.',
  'address.city': 'Quinch',
  'address.state': 'MA',
  'address.postalCode': '02169',
  'contact.mobile': '617-555-1212',
  'contact.home': '617-555-2000',
  'contact.social.linkedin': 'https://www.linkedin.com/in/jadamsfoundingfather/',
  'contact.social.twitter': '@johnadamsfounddingfather',
  'contact.social.email': 'johndams@foundingfathers.com',
  'contact.social.medium': '@johnadams',
  'contact.social.github': 'https://www.github.com/jadamsfoundingfather' }
```
