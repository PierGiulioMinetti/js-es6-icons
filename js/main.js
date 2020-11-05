$(document).ready(function() {

// Icon set
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];
const colors = [
      'blue', 
      'orange', 
      'purple'
];

// ICONS CONTAINER
const container = $('.icons');

//1 PRINT ICONS ON SCREEN

//2 PRINT WITH COLOR
const coloredIcons = colorIcons(icons, colors);
console.log(coloredIcons);
printIcons(coloredIcons, container); //--*********> DECOMMENT TO WORK

//3FILTER ICONS BY TYPE
const select = $('#type');
const types = getTypes(icons);
//gen options
genOption(types, select);
//event change
select.change(()=>{
  const selected = select.val();
  
  const filteredIcons = filterIcons(coloredIcons, selected);
  printIcons(filteredIcons, container);
});


}); //end doc ready



/**
 * PRINT ICONS ON SCREEN
 */
function printIcons(icons, container) {

  container.html('');

    icons.forEach((icon)=>{
        const {family, prefix, name, color} = icon;

        const html = 
        `
        <div class="icon">
            <i class="${family} ${prefix}${name}"
              style="color:${color}"></i>
            <div class="title">${name}</div>
        </div>
        `
        container.append(html);
        
    });

;}

// **
// / COLORED ICONS
// **

function colorIcons(icons, colors){
  // getTypes
  const types = getTypes(icons);
  console.log(types);
  // Assign color by type
  const coloredIcons = icons.map((icon)=>{
    const indexType = types.indexOf(icon.type);

    return {
      ...icon,
      color: colors[indexType]
    }
  });

  return coloredIcons
};



// **
// / GET ICONS TYPES
// **
function getTypes (icons){
  const types = [];
  icons.forEach((icon)=>{
    if (!types.includes(icon.type)){
      types.push(icon.type);
    }
   });
   return types;
};


/**
 * GET OPTIONS BY TYPE
 */

 function genOption (types, select) {
   types.forEach((opt)=>{
    select.append(`<option value="${opt}">${opt}</option>`);
   });
 }
   

/**
 * FILTER ICONS DISPLAY
 */
function filterIcons(coloredIcons, selected){

  if (selected === 'all') {
    return coloredIcons;
  }

  const filtered = coloredIcons.filter((icon)=>{
    return icon.type === selected;
  });
  return filtered;

}
