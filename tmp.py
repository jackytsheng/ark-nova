import json
  
# Opening JSON file
f = open('src/jsons/animals.json')

# returns JSON object as 
# a dictionary
data = json.load(f)
  
# Iterating through the json
# list
new_list = []
for obj in data:
    
		# Lower case
    obj['animal_name'] = obj['animal_name'].title()
    
    # Bonuses
    obj['bonuses'] = "0/0/0" if obj['bonuses'] == "" else obj['bonuses'] 
    a = obj['bonuses'].split("/")
    obj['bonuses'] = {"appeal": a[0], "conservation":a[1],"reputation":a[2]}

  
  
    new_list.append(obj)

  
# Closing file
f.close()

with open('animal_data.json', 'w') as outfile:
    json.dump(data, outfile)