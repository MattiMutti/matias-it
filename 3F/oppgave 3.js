let figur1 = {
    form: "rektangel",
    lengde: 4,
    bredde: 6,
    areal: 24,
    omkrets: 20,
    fullfigur: function() {
        return figur1.form + figur1.lengde + figur1.bredde + figur1.areal + figur1.omkrets;
      }
};

console.log(figur1.fullfigur());