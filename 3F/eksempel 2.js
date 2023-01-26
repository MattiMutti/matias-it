let personer = [
    { fornavn: "Lisa", etternavn: "Simpson" },
    { fornavn: "Peter", etternavn: "Griffin" },
    { fornavn: "Eric", etternavn: "Cartman" }
  ];

  console.log(personer)

  function sammenlignEtternavn(a, b) {
    if (a.etternavn > b.etternavn) {
      return 1;
    } else if (a.etternavn < b.etternavn) {
      return -1;
    } else {
      return 0;
    }
  }
  
personer.sort(sammenlignEtternavn);

console.log(personer)

