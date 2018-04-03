# JavaScript to flatten JSON down to a single column entity

* Allows for the normalization of JSON down to a single column entity.
* Subentities are distinquished by array indicies
* Helpful for reducing space, speeding up searching, etc.

## Original of Simple JSON
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
```javascript
	"items":
		{
			"item":
				[
					{
						"id": "0001",
						"type": "donut",
						"name": "Cake",
						"ppu": 0.55,
						"batters":
							{
								"batter":
									[
										{ "id": "1001", "type": "Regular" },
										{ "id": "1002", "type": "Chocolate" },
										{ "id": "1003", "type": "Blueberry" },
										{ "id": "1004", "type": "Devil's Food" }
									]
							},
						"topping":
							[
                { 
                  "id": "5001", 
                  "type": "None" 
                },
								{ 
                  "id": "5002", 
                  "type": "Glazed" 
                },
                { 
                  "id": "5005", 
                  "type": "Sugar" 
                },
								{ 
                  "id": "5007", 
                  "type": "Powdered Sugar" 
                },
                { 
                  "id": "5006", 
                  "type": "Chocolate with Sprinkles" 
                },
                { 
                  "id": "5003", 
                  "type": "Chocolate" 
                },
                { 
                  "id": "5004", 
                  "type": "Maple" 
                }
							]
					},
				]
		}
}
```

## Results
Simple JSON
------------
```
{ 
  firstName: 'John',
  lastName: 'Adams',
  id: 4122,
  'address.street': '500 Hancock St.',
  'address.city': 'Quinch',
  'address.state': 'MA',
  'address.postalCode': '02169',
  'contact[0].mobile': '617-555-1212',
  'contact[1].home': '617-555-2000',
  'contact[2].social[0].linkedin': 'https://www.linkedin.com/in/jadamsfoundingfather/',
  'contact[2].social[0].twitter': '@johnadamsfounddingfather',
  'contact[2].social[0].email': 'johndams@foundingfathers.com',
  'contact[2].social[0].medium': '@johnadams',
  'contact[2].social[0].github': 'https://www.github.com/jadamsfoundingfather' 
}
------------
```

Complex JSON
------------
```
{ 
  'items.item[0].id': '0001',
  'items.item[0].type': 'donut',
  'items.item[0].name': 'Cake',
  'items.item[0].ppu': 0.55,
  'items.item[0].batters.batter[0].id': '1001',
  'items.item[0].batters.batter[0].type': 'Regular',
  'items.item[0].batters.batter[1].id': '1002',
  'items.item[0].batters.batter[1].type': 'Chocolate',
  'items.item[0].batters.batter[2].id': '1003',
  'items.item[0].batters.batter[2].type': 'Blueberry',
  'items.item[0].batters.batter[3].id': '1004',
  'items.item[0].batters.batter[3].type': 'Devil\'s Food',
  'items.item[0].topping[0].id': '5001',
  'items.item[0].topping[0].type': 'None',
  'items.item[0].topping[1].id': '5002',
  'items.item[0].topping[1].type': 'Glazed',
  'items.item[0].topping[2].id': '5005',
  'items.item[0].topping[2].type': 'Sugar',
  'items.item[0].topping[3].id': '5007',
  'items.item[0].topping[3].type': 'Powdered Sugar',
  'items.item[0].topping[4].id': '5006',
  'items.item[0].topping[4].type': 'Chocolate with Sprinkles',
  'items.item[0].topping[5].id': '5003',
  'items.item[0].topping[5].type': 'Chocolate',
  'items.item[0].topping[6].id': '5004',
  'items.item[0].topping[6].type': 'Maple' 
  }
  ------------
  ```