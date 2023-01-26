let personer = [
    { navn: "Ola", 
      fodselsaar: 2014 },
    { navn: "Iben", 
      fodselsaar: 2010 },
    { navn: "Martin", 
      fodselsaar: 2004 },
    { navn: "Jesper", 
      fodselsaar: 2017 },
    { navn: "Aleksander", 
      fodselsaar: 2016 }
  ];

  for (var i = 0; i < personer.length; i++) {
    console.log(personer[i].navn + " ble født i " + personer[i].fodselsaar + ". ");
  }