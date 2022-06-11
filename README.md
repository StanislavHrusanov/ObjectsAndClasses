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
