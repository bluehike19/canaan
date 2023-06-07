const items = [{
  number: '1',
  name: 'plates',
  inputs: {
    box1: 'plateA',
    box2: 'plateB',
    box3: 'Of'
  },
  result: 'plateC'
}, {
  number: '2',
  name: 'spoons',
  inputs: {
    box1: 'spoonA',
    box2: 'spoonB'
  },
  result: 'spoonC'
}];

let itemsHTML = '';

items.forEach((item) => {
  itemsHTML += `

 
       
  
<tr>  
<th>${item.number}</th>
<th>${item.name}</th>
<td><input  type="number" id="${item.box1}"></td>       
<td><input  type="number" id="${item.box2}"><input id="ok-btn" type="button" name="btnSubtract" value="${item.box3}" onclick="subtract()"></td>
<td><button class="answer-btn" id="${item.result}"></button></td> 
</tr>
  
          
  </table><br><br><br>  
 
  `;
  
});
console.log(itemsHTML)

document.querySelector('.js-items').
innerHTML = itemsHTML;