/**
 * @fileoverview Normalize JSON.
 * 
 * @package
 */
var SimpleJSON= {
  "firstName": "John",
  "lastName": "Adams",
  "id" : 4122,
  "address" : {
    "street": "500 Hancock St.", 
    "city": "Quinch", 
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

/**
 * UnFlatten a JSON document and return it to it's complex (long) form.
  * @param {object} data JSON object/doc.
 */
JSON.unflattenJSON = function(data) {
  "use strict";
  if (Object(data) !== data || Array.isArray(data))
      return data;
  var r = {}, k, v, i, last, t;
  for(var entity in data) {
      k = r, v = "", last = 0;
      do {
          i = entity.indexOf(".", last);
          t = entity.substring(last, i !== -1 ? i : undefined);
          k = k[v] || (k[v] = (!isNaN(parseInt(t)) ? [] : {}));
          v = t;
          last = i + 1;
      } while(i >= 0);
      k[v] = data[entity];
  }
  return r[""];
}

/**
 * Flatten a nested (complex) JSON object down to normalized single entity.
 * Nested items become single entity with lineage.
 * @param {object} data JSON object/doc.
 */
const flattenJSON = (data) => {
  let r = {};
  function traverse(k, v) {
    if (k !== Object(k)) {
      r[v] = k;
    } else
    if (Array.isArray(k)) {
      for (i = 0, j = k.length; i < j; i++)
      // ensure we have an indices to define subentities.
        traverse(k[i], v + "[" + i + "]");
      if (j == 0)
        r[v] = [];
    } else {
      let empty = true;
      for (let entity in k) {
        empty = false;
        traverse (k[entity], v ? v + "." + entity : entity);
      }
      if (empty && v)
        r[v] = {};
    }
  }
  traverse (data, "");
  return r;
}



result = flattenJSON(SimpleJSON);
console.log("Simple JSON")
console.log("------------")
console.log(result);
console.log("------------")
console.log("Unflatten")
console.log("------------")
result = JSON.unflattenJSON(result);
console.log(result)
console.log("------------")

var complexJSON = {
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

result = flattenJSON(complexJSON);
console.log("Complex JSON")
console.log("------------")
console.log(result);
console.log("Unflatten")
console.log("------------")
result = JSON.unflattenJSON(result);
console.log(result)
console.log("------------")
