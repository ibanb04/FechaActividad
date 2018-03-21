class Fecha{
  constructor(dia, mes, anio){
    if( this.esValida(dia,mes,anio) == 'valida'){   
      this.dia = dia;
      this.mes = mes;
      this.anio = anio; 
    }else{
      alert('fecha invalida');
    }
  }

  get dia(){
    return this._dia;   
  }

  get mes(){
    return this._mes;   
  }

  get anio(){
    return this._anio;    
  }

  set dia(valor){
    this._dia = valor;
  }
  set mes(valor){
    this._mes = valor;
  }
  set anio(valor){
    this._anio= valor;
  }

  esValida(dia, mes, anio){
    var res = "no valida";
    var diasBisiesto =['31','29','31','30','31','30','31','31','30','31','30','31'];
    var diasNoBisiesto =['31','28','31','30','31','30','31','31','30','31','30','31'];
    if( anio>1990 && mes>0 && mes<=12 && dia>0 && dia<=31 )
    if(bisiesto()){
      if(dia <= diasBisiesto[mes] ){
        res='valida';
      }
    }else{
      if(dia <= diasNoBisiesto[mes] ){
        res='valida';
      }
    }
    return res;
  }

  bisiesto(){
      var sw="";
      if ( (( this.anio%100 != 0) && ( this.anio%4==0)) || (this.anio%400==0) ){
        sw="es bisiesto";
      }else{
        sw="no es bisiesto";
      }
      return sw;
  }

  latino(){
    return  this.dia+"/"+this.mes+"/"+this.anio;
  }
  gringo(){
    return  this.mes+"/"+this.dia+"/"+this.anio;
  }
}