# ObjectsAndClasses
Problems for exercise and homework from my training in Softuni

## **1. Person Info**

Write a function that receives **3 parameters**, sets them to an
**object**, and **returns** that object.

The input comes as **3 separate strings** in the following order:
**firstName**, **lastName**, **age**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Object Properties</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>"Peter",<br />
"Pan",<br />
"20"</strong></td>
<td><p><strong>firstName: Peter</strong></p>
<p><strong>lastName: Pan</strong></p>
<p><strong>age: 20</strong></p></td>
</tr>
<tr class="even">
<td><strong>"George",<br />
"Smith",<br />
"18"</strong></td>
<td><p><strong>firstName: George</strong></p>
<p><strong>lastName: Smith</strong></p>
<p><strong>age: 18</strong></p></td>
</tr>
</tbody>
</table>

## **2. City**

Write a function that receives a **single** **parameter** – an
**object**, containing **five properties**:

**{ name, area, population, country, postcode }**

Loop through all the **keys** and **print** them with their **values**
in format: "**{key} -\> {value}**"

See the examples below.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>{</strong></p>
<p><strong>name: "Sofia",</strong></p>
<p><strong>area: 492,</strong></p>
<p><strong>population: 1238438,</strong></p>
<p><strong>country: "Bulgaria",</strong></p>
<p><strong>postCode: "1000"</strong></p>
<p><strong>}</strong></p></td>
<td><p><strong>name -&gt; Sofia</strong></p>
<p><strong>area -&gt; 492</strong></p>
<p><strong>population -&gt; 1238438</strong></p>
<p><strong>country -&gt; Bulgaria</strong></p>
<p><strong>postCode -&gt; 1000</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>{</strong></p>
<p><strong>name: "Plovdiv",</strong></p>
<p><strong>area: 389,</strong></p>
<p><strong>population: 1162358,</strong></p>
<p><strong>country: "Bulgaria",</strong></p>
<p><strong>postCode: "4000"</strong></p>
<p><strong>}</strong></p></td>
<td><p><strong>name -&gt; Plovdiv</strong></p>
<p><strong>area -&gt; 389</strong></p>
<p><strong>population -&gt; 1162358</strong></p>
<p><strong>country -&gt; Bulgaria</strong></p>
<p><strong>postCode -&gt; 4000</strong></p></td>
</tr>
</tbody>
</table>

## Convert to Object

Write a function that receives a **string** in **JSON format** and
converts it to an **object**.

Loop through all the keys and print them with their values in format:
"**{key}: {value}**"

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>'{"name": "George", "age": 40, "town": "Sofia"}'</strong></td>
<td><p><strong>name: George</strong></p>
<p><strong>age: 40</strong></p>
<p><strong>town: Sofia</strong></p></td>
</tr>
<tr class="even">
<td><strong>'{"name": "Peter", "age": 35, "town": "Plovdiv"}'</strong></td>
<td><p><strong>name: Peter</strong></p>
<p><strong>age: 35</strong></p>
<p><strong>town: Plovdiv</strong></p></td>
</tr>
</tbody>
</table>


## **3. Convert to JSON**

Write a function that receives a **first name**, **last name**, **hair
color** and sets them to an **object**.

Convert the **object** to **JSON string** and print it.

Input is provided as **3 single strings** in the order stated above.

### Examples

| **Input**                      | **Output**                                                   |
| ------------------------------ | ------------------------------------------------------------ |
| **'George', 'Jones', 'Brown'** | **{"name":"George","lastName":"Jones","hairColor":"Brown"}** |
| **'Peter', 'Smith', 'Blond'**  | **{"name":"Peter","lastName":"Smith","hairColor":"Blond"}**  |


## **4. Cats**

Write a function that receives **array** of strings in the following
format **'{cat name} {age}'**.

Create a **Cat** **class** that receives in the **constructor** the
**name** and the **age** parsed from the input.

It should also have a method named **"meow"** that will print **"{cat
name}, age {age} says Meow"** on the console.

For each of the strings provided, you must **create a cat object** and
invoke the **.meow ()** method**.**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>['Mellow 2', 'Tom 5']</strong></td>
<td><p><strong>Mellow, age 2 says Meow</strong></p>
<p><strong>Tom, age 5 says Meow</strong></p></td>
</tr>
<tr class="even">
<td><strong>['Candy 1', 'Poppy 3', 'Nyx 2']</strong></td>
<td><p><strong>Candy, age 1 says Meow</strong></p>
<p><strong>Poppy, age 3 says Meow</strong></p>
<p><strong>Nyx, age 2 says Meow</strong></p></td>
</tr>
</tbody>
</table>


## **5. Songs**

Define a **class** **Song**, which holds the following information about
songs: **typeList**, **name,** and **time**.

You will receive the input as an **array**.

The first element **n** will be the number of songs. Next **n** elements
will be the songs data in the following format:
**"{typeList}\_{name}\_{time}"**, and the last element will be
**typeList** / **"all".**

Print only the **names of the songs**, which have the same **typeList
(**obtained as the last parameter**)**. If the value of the last element
is **"all",** print the names of all the songs.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[3,</strong></p>
<p><strong>'favourite_DownTown_3:14',</strong></p>
<p><strong>'favourite_Kiss_4:16',</strong></p>
<p><strong>'favourite_Smooth Criminal_4:01',</strong></p>
<p><strong>'favourite']</strong></p></td>
<td><p><strong>DownTown</strong></p>
<p><strong>Kiss</strong></p>
<p><strong>Smooth Criminal</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>[4,</strong></p>
<p><strong>'favourite_DownTown_3:14',</strong></p>
<p><strong>'listenLater_Andalouse_3:24',</strong></p>
<p><strong>'favourite_In To The Night_3:58',</strong></p>
<p><strong>'favourite_Live It Up_3:48',</strong></p>
<p><strong>'listenLater']</strong></p></td>
<td><strong>Andalouse</strong></td>
</tr>
<tr class="odd">
<td><p><strong>[2,</strong></p>
<p><strong>'like_Replay_3:15',</strong></p>
<p><strong>'ban_Photoshop_3:48',</strong></p>
<p><strong>'all']</strong></p></td>
<td><p><strong>Replay</strong></p>
<p><strong>Photoshop</strong></p></td>
</tr>
</tbody>
</table>

## **6. Employees**

You're tasked to create a list of employees and their personal numbers.

You will receive an array of strings. Each string is an employee
**name** and to assign them a personal number you have to find the
**length of the name** (whitespace included).

***Try to use an object***.

At the end print all the list employees in the following format:

**"Name: {employeeName} -- Personal Number: {personalNum}"**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'Silas Butler',</p>
<p>'Adnaan Buckley',</p>
<p>'Juan Peterson',</p>
<p>'Brendan Villarreal'</p>
<p>]</p></td>
<td><p>Name: Silas Butler -- Personal Number: 12</p>
<p>Name: Adnaan Buckley -- Personal Number: 14</p>
<p>Name: Juan Peterson -- Personal Number: 13</p>
<p>Name: Brendan Villarreal -- Personal Number: 18</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'Samuel Jackson',</p>
<p>'Will Smith',</p>
<p>'Bruce Willis',</p>
<p>'Tom Holland'</p>
<p>]</p></td>
<td><p>Name: Samuel Jackson -- Personal Number: 14</p>
<p>Name: Will Smith -- Personal Number: 10</p>
<p>Name: Bruce Willis -- Personal Number: 12</p>
<p>Name: Tom Holland -- Personal Number: 11</p></td>
</tr>
</tbody>
</table>

## **7. Towns**

You’re tasked to create and print **objects** from a text table.

You will receive the input as an **array** of strings, where each string
represents a table row, with values on the row separated by pipes **" |
"** and spaces.

The table will consist of exactly 3 columns **"Town"**, **"Latitude"**
and **"Longitude"**. The **latitude** and **longitude** columns will
always contain **valid numbers**. Check the examples to get a better
understanding of your task.

The **output** should be **objects**. Latitude and longitude must be
parsed to **numbers and formatted to the second decimal point**\!

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['Sofia | 42.696552 | 23.32601',</p>
<p>'Beijing | 39.913818 | 116.363625']</p></td>
</tr>
<tr class="even">
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }</p>
<p>{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }</p></td>
</tr>
</tbody>
</table>

| **Input**                                                    |
| ------------------------------------------------------------ |
| \['Plovdiv | 136.45 | 812.575'\]                             |
| **Output**                                                   |
| { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' } |

## **8. Store Provision**

You will receive **two arrays**. The first array represents the current
**stock** of the local store. The second array will contain **products**
that the store has **ordered** for delivery.

The following information applies to both arrays:

Every **even** index will hold the **name** of the **product** and every
**odd** index will hold the **quantity** of that **product**. The second
array could contain products that are **already in** the local store. If
that happens **increase** the **quantity** for the given product. You
should store them into an **object**, and print them in the following
format: **(product -\> quantity)**

All of the arrays’ values will be **strings.**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'</p>
<p>],</p>
<p>[</p>
<p>'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'</p>
<p>]</p></td>
<td><p>Chips -&gt; 5</p>
<p>CocaCola -&gt; 9</p>
<p>Bananas -&gt; 44</p>
<p>Pasta -&gt; 11</p>
<p>Beer -&gt; 2</p>
<p>Flour -&gt; 44</p>
<p>Oil -&gt; 12</p>
<p>Tomatoes -&gt; 70</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'</p>
<p>],</p>
<p>[</p>
<p>'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'</p>
<p>]</p></td>
<td><p>Salt -&gt; 2</p>
<p>Fanta -&gt; 4</p>
<p>Apple -&gt; 21</p>
<p>Water -&gt; 4</p>
<p>Juice -&gt; 5</p>
<p>Sugar -&gt; 44</p>
<p>Oil -&gt; 12</p>
<p>Tomatoes -&gt; 7</p>
<p>Bananas -&gt; 30</p></td>
</tr>
</tbody>
</table>

## **9. Movies**

Write a function that stores information about movies inside an array.
The movie's object info must be **name, director,** and **date**. You
can receive several types of input:

  - **"addMovie {movie name}"** – add the movie

  - **"{movie name} directedBy {director}"** – check if the movie
    **exists** and then add the director

  - **"{movie name} onDate {date}"** – check if the movie **exists** and
    then add the date

At the end print all the movies that have **all the info** (if the movie
has **no** director, name, or date, **don’t** print it) in **JSON
format.**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'addMovie Fast and Furious',</p>
<p>'addMovie Godfather',</p>
<p>'Inception directedBy <a href="https://www.imdb.com/name/nm0634240/?ref_=tt_ov_dr">Christopher Nolan</a>',</p>
<p>'Godfather directedBy <a href="https://www.imdb.com/name/nm0000338/?ref_=tt_ov_dr">Francis Ford Coppola</a>',</p>
<p>'Godfather onDate 29.07.2018',</p>
<p>'Fast and Furious onDate 30.07.2018',</p>
<p>'Batman onDate 01.08.2018',</p>
<p>'Fast and Furious directedBy <a href="https://www.imdb.com/name/nm0003418/?ref_=tt_ov_dr">Rob Cohen</a>'</p>
<p>]</p></td>
<td><p>{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}</p>
<p>{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'addMovie The Avengers',</p>
<p>'addMovie Superman',</p>
<p>'The Avengers directedBy Anthony Russo',</p>
<p>'The Avengers onDate 30.07.2010',</p>
<p>'Captain America onDate 30.07.2010',</p>
<p>'Captain America directedBy Joe Russo'</p>
<p>]</p></td>
<td>{"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}</td>
</tr>
</tbody>
</table>

## **10. Inventory**

Create a function, which creates a **register for heroes**, with their
**names**, **level**, and **items** (if they have such).

The **input** comes as an **array of strings**. Each element holds data
for a hero, in the following format:

**"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."**

You must store the data about every hero. The **name** is a **string**,
a **level** is a **number** and the items are all **strings.**

The **output** is all of the data for all the heroes you’ve stored
**sorted ascending by level**. The data must be in the following format
for each hero:

> **Hero: {heroName}**
> 
> **level =\> {heroLevel}**
> 
> **Items =\> {item1}, {item2}, {item3}**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'Isacc / 25 / Apple, GravityGun',</p>
<p>'Derek / 12 / BarrelVest, DestructionSword',</p>
<p>'Hes / 1 / Desolator, Sentinel, Antara'</p>
<p>]</p></td>
<td><p>Hero: Hes</p>
<p>level =&gt; 1</p>
<p>items =&gt; Desolator, Sentinel, Antara</p>
<p>Hero: Derek</p>
<p>level =&gt; 12</p>
<p>items =&gt; BarrelVest, DestructionSword</p>
<p>Hero: Isacc</p>
<p>level =&gt; 25</p>
<p>items =&gt; Apple, GravityGun</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'Batman / 2 / Banana, Gun',</p>
<p>'Superman / 18 / Sword',</p>
<p>'Poppy / 28 / Sentinel, Antara'</p>
<p>]</p></td>
<td><p>Hero: Batman</p>
<p>level =&gt; 2</p>
<p>items =&gt; Banana, Gun</p>
<p>Hero: Superman</p>
<p>level =&gt; 18</p>
<p>items =&gt; Sword</p>
<p>Hero: Poppy</p>
<p>level =&gt; 28</p>
<p>items =&gt; Sentinel, Antara</p></td>
</tr>
</tbody>
</table>

## **11. Make a Dictionary**

You will receive an **array** with **strings in the form of JSON's.**

You have to parse these strings and combine them into **one object**.
Every string from the array will hold **terms** and a **description.**
If you receive the **same term** **twice,** replace it with the **new
definition**.

Print every term and definition in that dictionary on new line in
format:

**\`Term: ${term} =\> Definition: ${definition}\`**

**Don't forget to sor**t the dictionary **alphabetically** by the terms
as in real dictionaries.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',</p>
<p>'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',</p>
<p>'{"Boiler":"A fuel-burning apparatus or container for heating water."}',</p>
<p>'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',</p>
<p>'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'</p>
<p>]</p></td>
<td><p>Term: Boiler =&gt; Definition: A fuel-burning apparatus or container for heating water.</p>
<p>Term: Bus =&gt; Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.</p>
<p>Term: Coffee =&gt; Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.</p>
<p>Term: Microphone =&gt; Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.</p>
<p>Term: Tape =&gt; Definition: A narrow strip of material, typically used to hold or fasten something.</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',</p>
<p>'{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',</p>
<p>'{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',</p>
<p>'{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',</p>
<p>'{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '</p>
<p>]</p></td>
<td><p>Term: Art =&gt; Definition: The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.</p>
<p>Term: Cake =&gt; Definition: An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated.</p>
<p>Term: Cup =&gt; Definition: A small bowl-shaped container for drinking from, typically having a handle</p>
<p>Term: Music =&gt; Definition: Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion.</p>
<p>Term: Watermelon =&gt; Definition: The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice.</p></td>
</tr>
</tbody>
</table>

## **12. Class Vehicle**

Create a class with the name **Vehicle** that has the following
properties:

  - **type** – a string

  - **model** – a string

  - **parts** – an object that contains:

<!-- end list -->

  - **engine** – number (quality of the engine)

  - **power** – number

  - **quality** – engine \* power

<!-- end list -->

  - **fuel** – a number

  - **drive** – a function that receives fuel loss and decreases the
    fuel of the vehicle by that number

The **constructor** should receive the **type**, the **model**, the
**parts** as an **object,** and the **fuel**

In judge post your **class** (**Note: all names should be as
described**)

### Example

Test your Vehicle class.

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>let parts = { engine: 6, power: 100 };</p>
<p>let vehicle = new Vehicle('a', 'b', parts, 200);</p>
<p>vehicle.drive(100);</p>
<p>console.log(vehicle.fuel);</p>
<p>console.log(vehicle.parts.quality);</p></td>
<td><p>100</p>
<p>600</p></td>
</tr>
<tr class="even">
<td><p>let parts = {engine: 9, power: 500};</p>
<p>let vehicle = new Vehicle('l', 'k', parts, 840);</p>
<p>vehicle.drive(20);</p>
<p>console.log(vehicle.fuel);</p></td>
<td>820</td>
</tr>
</tbody>
</table>

## **13. \*Class Storage**

Create a **class** **Storage**. It should have the following
**properties**, while the **constructor** should only receive a
**capacity**:

  - **capacity** – a number that **decreases when adding a given
    quantity** of products to storage

  - **storage** – **list of products** (object). **Each product** should
    have:

<!-- end list -->

  - **name** - a string

  - **price** – a number (price is for a single piece of product)

  - **quantity** – a number

<!-- end list -->

  - **totalCost** – the sum of the cost of the products

The class should also have the following **methods:**

  - **addProduct** – a function that receives a product and adds it to
    the storage

  - **getProcuts** – a function that returns all the products in storage
    in **JSON** format, each on a new line

Paste only the **class** **Storage in judge** (**Note: all names should
be as described**)

### Example

Test your Storage class.

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};</p>
<p>let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};</p>
<p>let productThree = {name: 'Bread', price: 1.10, quantity: 8};</p>
<p>let storage = new Storage(50);</p>
<p>storage.addProduct(productOne);</p>
<p>storage.addProduct(productTwo);</p>
<p>storage.addProduct(productThree);</p>
<p>console.log(storage.getProducts());</p>
<p>console.log(storage.capacity);</p>
<p>console.log(storage.totalCost);</p></td>
<td><p>{"name":"Cucamber","price":1.5,"quantity":15}</p>
<p>{"name":"Tomato","price":0.9,"quantity":25}</p>
<p>{"name":"Bread","price":1.1,"quantity":8}</p>
<p>2</p>
<p>53.8</p></td>
</tr>
<tr class="even">
<td><p>let productOne = {name: 'Tomato', price: 0.90, quantity: 19};</p>
<p>let productTwo = {name: 'Potato', price: 1.10, quantity: 10};</p>
<p>let storage = new Storage(30);</p>
<p>storage.addProduct(productOne);</p>
<p>storage.addProduct(productTwo);</p>
<p>console.log(storage.totalCost);</p></td>
<td>28.1</td>
</tr>
</tbody>
</table>

## **14. \*Catalogue**

You have to create a sorted catalog of store **products**. You will be
given the products’ **names** and **prices**. You need to order them in
**alphabetical order**.

The **input** comes as an **array** of strings. Each element holds info
about a product in the following format:

> **"{productName} : {productPrice}"**

The **product’s name** will be a **string**, which will **always**
**start with a capital letter**, and the **price** will be **a number**.
You can safely assume there will be **NO duplicate product input**. The
comparison for alphabetical order is **case-insensitive**.

As **output,** you must print all the products in a specified format.
They must be ordered **exactly as specified above**. The products must
be **divided into groups**, by the **initial of their name**. The
**group's initial should be printed**, and after that, the products
should be printed with **2 spaces before their names**. For more info
check the examples.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'Appricot : 20.4',</p>
<p>'Fridge : 1500',</p>
<p>'TV : 1499',</p>
<p>'Deodorant : 10',</p>
<p>'Boiler : 300',</p>
<p>'Apple : 1.25',</p>
<p>'Anti-Bug Spray : 15',</p>
<p>'T-Shirt : 10'</p>
<p>]</p></td>
<td><p><strong>A</strong></p>
<p><strong>Anti-Bug Spray: 15</strong></p>
<p><strong>Apple: 1.25</strong></p>
<p><strong>Appricot: 20.4</strong></p>
<p><strong>B</strong></p>
<p><strong>Boiler: 300</strong></p>
<p><strong>D</strong></p>
<p><strong>Deodorant: 10</strong></p>
<p><strong>F</strong></p>
<p><strong>Fridge: 1500</strong></p>
<p><strong>T</strong></p>
<p><strong>T-Shirt: 10</strong></p>
<p><strong>TV: 1499</strong></p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'Omlet : 5.4',</p>
<p>'Shirt : 15',</p>
<p>'Cake : 59'</p>
<p>]</p></td>
<td><p><strong>C</strong></p>
<p><strong>Cake: 59</strong></p>
<p><strong>O</strong></p>
<p><strong>Omlet: 5.4</strong></p>
<p><strong>S</strong></p>
<p><strong>Shirt: 15</strong></p></td>
</tr>
</tbody>
</table>

## **15. Class Laptop**

Create a **class Laptop** that has the following properties:

  - **info** – object that contains:

<!-- end list -->

  - **producer** – string

  - **age** – number

  - **brand** – string

<!-- end list -->

  - **isOn** – boolean (false by default)

  - **turnOn** – a function that **sets the isOn** variable to **true**

  - **turnOff** – a function that **sets the isOn** variable to
    **false**

  - **showInfo** – a function that returns the **producer, age, and
    brand as JSON**

  - **quality** – number (every time the laptop **is turned on/off the
    quality decreases by 1**)

  - **getter price** – number (**800 – {age \* 2} + (quality \* 0.5)**)

The **constructor** should receive the **info as an object and the
quality.**

### Examples

Test your class.

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>let info = {producer: "Dell", age: 2, brand: "XPS"}</p>
<p>let laptop = new Laptop(info, 10)</p>
<p>laptop.turnOn()</p>
<p>console.log(laptop.showInfo())</p>
<p>laptop.turnOff()</p>
<p>console.log(laptop.quality)</p>
<p>laptop.turnOn()</p>
<p>console.log(laptop.isOn)</p>
<p>console.log(laptop.price)</p></td>
<td><p>{"producer":"Dell","age":2,"brand":"XPS"}</p>
<p>8</p>
<p>true</p>
<p>799.5</p></td>
</tr>
<tr class="even">
<td><p>let info = {producer: "Lenovo", age: 1, brand: "Legion"}</p>
<p>let laptop = new Laptop(info, 10)</p>
<p>laptop.turnOn()</p>
<p>console.log(laptop.showInfo())</p>
<p>laptop.turnOff()</p>
<p>laptop.turnOn()</p>
<p>laptop.turnOff()</p>
<p>console.log(laptop.isOn)</p></td>
<td><p>{"producer":"Lenovo","age":1,"brand":"Legion"}</p>
<p>false</p></td>
</tr>
</tbody>
</table>

## **16. Flight Schedule**

You will receive an **array** with **arrays.**

The first array (**at index 0**) will hold all flights on a **specific**
**sector** in the airport. The second array (**at index 1**) will
contain **newly changed statuses** of **some** of the **flights** at
this airport. The third array (**at index 2**) will have a single
**string,** which will **be the flight status** you need to check. When
you put all flights into an **object** and change the statuses depends
on the new information on the second array. You must print all flights
with the given status from the last **array**.

  - If the value of the string obtained from the third array is "**Ready
    to fly**":

<!-- end list -->

  - then you must **print** flights that have **not changed** their
    **status** in the second array

  - and automatically **change** the status to "**Ready to fly**"

<!-- end list -->

  - Otherwise, print **only flights** that have **changed** their
    status.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[['WN269 Delaware',</p>
<p>'FL2269 Oregon',</p>
<p>'WN498 Las Vegas',</p>
<p>'WN3145 Ohio',</p>
<p>'WN612 Alabama',</p>
<p>'WN4010 New York',</p>
<p>'WN1173 California',</p>
<p>'DL2120 Texas',</p>
<p>'KL5744 Illinois',</p>
<p>'WN678 Pennsylvania'],</p>
<p>['DL2120 Cancelled',</p>
<p>'WN612 Cancelled',</p>
<p>'WN1173 Cancelled',</p>
<p>'SK430 Cancelled'],</p>
<p>['Cancelled']</p>
<p>]</p></td>
<td><p>{ Destination: 'Alabama', Status: 'Cancelled' }</p>
<p>{ Destination: 'California', Status: 'Cancelled' }</p>
<p>{ Destination: 'Texas', Status: 'Cancelled' }</p></td>
</tr>
<tr class="even">
<td><p>[['WN269 Delaware',</p>
<p>'FL2269 Oregon',</p>
<p>'WN498 Las Vegas',</p>
<p>'WN3145 Ohio',</p>
<p>'WN612 Alabama',</p>
<p>'WN4010 New York',</p>
<p>'WN1173 California',</p>
<p>'DL2120 Texas',</p>
<p>'KL5744 Illinois',</p>
<p>'WN678 Pennsylvania'],</p>
<p>['DL2120 Cancelled',</p>
<p>'WN612 Cancelled',</p>
<p>'WN1173 Cancelled',</p>
<p>'SK330 Cancelled'],</p>
<p>['Ready to fly']</p>
<p>]</p></td>
<td><p><strong>{ Destination: 'Delaware', Status: 'Ready to fly' }</strong></p>
<p><strong>{ Destination: 'Oregon', Status: 'Ready to fly' }</strong></p>
<p><strong>{ Destination: 'Las Vegas', Status: 'Ready to fly' }</strong></p>
<p><strong>{ Destination: 'Ohio', Status: 'Ready to fly' }</strong></p>
<p><strong>{ Destination: 'New York', Status: 'Ready to fly' }</strong></p>
<p><strong>{ Destination: 'Illinois', Status: 'Ready to fly' }</strong></p>
<p><strong>{ Destination: 'Pennsylvania', Status: 'Ready to fly' }</strong></p></td>
</tr>
</tbody>
</table>

## **17. School Register**

In this problem, you have to arrange all students by **grade**. You as
the secretary of the school principal will process students and store
them into a school register before the new school year hits. As a draft,
you have a list of all the students from **last year** but mixed.
<span class="underline">Keep in mind that if a student has a lower score
than 3, he does not go into the next class</span>. As a result of your
work, you have to print the entire school register **sorted** in
**ascending order by grade** already filled with all the students from
last year in the format:

**\`{nextGrade} Grade**

**List of students: {All students in that grade}**

**Average annual score from last year: {average annual score on the
entire class from last year}\`**

And empty row **{console.log}**

The input will be an **array** with strings, each containing a student's
name, last year's grade, and an annual score. The **average annual score
from last year** should be **formatted to the second decimal point**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",</p>
<p>"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",</p>
<p>"Student name: George, Grade: 8, Graduated with an average score: 2.83",</p>
<p>"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",</p>
<p>"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",</p>
<p>"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",</p>
<p>"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",</p>
<p>"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",</p>
<p>"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",</p>
<p>"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",</p>
<p>"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",</p>
<p>"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"</p>
<p>]</p></td>
<td><p>9 Grade</p>
<p>List of students: Mark, Daryl</p>
<p>Average annual score from last year: 5.35</p>
<p>10 Grade</p>
<p>List of students: Ethan, Joey, Bill</p>
<p>Average annual score from last year: 5.52</p>
<p>11 Grade</p>
<p>List of students: Steven, Philip, Gavin</p>
<p>Average annual score from last year: 4.42</p>
<p>12 Grade</p>
<p>List of students: Bob, Peter</p>
<p>Average annual score from last year: 5.02</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'Student name: George, Grade: 5, Graduated with an average score: 2.75',</p>
<p>'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',</p>
<p>'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',</p>
<p>'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',</p>
<p>'Student name: John, Grade: 9, Graduated with an average score: 2.90',</p>
<p>'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',</p>
<p>'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'</p>
<p>]</p></td>
<td><p>2 Grade</p>
<p>List of students: Darsy</p>
<p>Average annual score from last year: 5.15</p>
<p>3 Grade</p>
<p>List of students: Steven</p>
<p>Average annual score from last year: 4.90</p>
<p>6 Grade</p>
<p>List of students: Boby</p>
<p>Average annual score from last year: 4.20</p>
<p>10 Grade</p>
<p>List of students: Alex</p>
<p>Average annual score from last year: 3.66</p></td>
</tr>
</tbody>
</table>

## **18. Browser History**

As input, you will receive **two parameters**: **an** **object and a
string array.**

The object will be in format: **{Browser Name}:{Name of the browser},
Open tabs:\[…\], Recently Closed: \[…\], Browser Logs: \[…\]**. Your
task is to fill in the object based on the actions we will get in the
array of strings.

You can **open** any site in the world as many times as you like; if you
do that <span class="underline">add it to the open tabs</span>.

You can **close** only these tabs you have **opened already**\! If the
current action contains a valid opened site, you should remove it from
"**Open Tabs**" and put it into "**Recently closed**", otherwise **don't
do anything\!**

**Browser Logs** will hold every single **Valid** action, which you did
(Open and Close).

There is a **special case** in which you can get an action that says:
**"Clear History and Cache".** That means you should **empty the whole
object**.

In the end, print the object in the format:

**{Browser name}**

**Open Tabs: {\[…\]}** // Joined by comma and space

**Recently Closed: {\[…\]}** // Joined by comma and space

**Browser Logs: {\[…\]}** // Joined by comma and space

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>{"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],</p>
<p>"Recently Closed":["Yahoo","Gmail"],</p>
<p>"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},</p>
<p>["Close Facebook", "Open StackOverFlow", "Open Google"]</p></td>
<td><p>Google Chrome</p>
<p>Open Tabs: YouTube, Google Translate, StackOverFlow, Google</p>
<p>Recently Closed: Yahoo, Gmail, Facebook</p>
<p>Browser Logs: Open YouTube, Open Yahoo, Open Google Translate, Close Yahoo, Open Gmail, Close Gmail, Open Facebook, Close Facebook, Open StackOverFlow, Open Google</p></td>
</tr>
<tr class="even">
<td><p>{"Browser Name":"Mozilla Firefox",</p>
<p>"Open Tabs":["YouTube"],</p>
<p>"Recently Closed":["Gmail", "Dropbox"],</p>
<p>"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},</p>
<p>["Open Wikipedia", "Clear History and Cache", "Open Twitter"]</p></td>
<td><p>Mozilla Firefox</p>
<p>Open Tabs: Twitter</p>
<p>Recently Closed:</p>
<p>Browser Logs: Open Twitter</p></td>
</tr>
</tbody>
</table>

## **19. Sequences**

You are tasked with storing sequences of numbers. You will receive an
**array of strings; each of them will contain** an unknown amount of
**arrays containing numbers,** from which you must store only the
**unique** arrays (duplicate arrays should be discarded). An array is
considered the **same** (**NOT unique**) if it contains the **same
numbers** as another array**, regardless of their order**.

After storing all arrays, your program should print them back in
**ascending** order based on their **length**, if two arrays have the
same length, they should be printed in **order of being received from
the input**. Each array should be printed in **descending order** in the
format **"\[a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>,…
a<sub>n</sub>\]"**. Check the examples below.

The **input** comes as an **array of strings** where **each entry is a
JSON representing an array of numbers**.

The **output** should be printed on the console - each array printed on
a new line in the format **"\[a1, a2, a3,… an\]",** following the
above-mentioned ordering.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>["[-3, -2, -1, 0, 1, 2, 3, 4]",</p>
<p>"[10, 1, -17, 0, 2, 13]",</p>
<p>"[4, -3, 3, -2, 2, -1, 1, 0]"]</p></td>
<td><p>[13, 10, 2, 1, 0, -17]</p>
<p>[4, 3, 2, 1, 0, -1, -2, -3]</p></td>
</tr>
<tr class="even">
<td><p>["[7.14, 7.180, 7.339, 80.099]",</p>
<p>"[7.339, 80.0990, 7.140000, 7.18]",</p>
<p>"[7.339, 7.180, 7.14, 80.099]"]</p></td>
<td>[80.099, 7.339, 7.18, 7.14]</td>
</tr>
</tbody>
</table>
