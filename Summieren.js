"use strict";

//FUNKTION
/*
  1.PARAMETER BESTIMMEN: WELCHE PARAMETER HABEN WIR?
      Zeile 11 Variable: Berechnung. Enthält die Funktion mit den parametern a und b
  2.SUMMIERUNG DER PARAMETER: WAS SOLL MIT DEN PARAMETERN GESCHEHEN?
      Zeile 12 Rückgabewert der Funktion: a soll mit b addiert werden
*/

let Berechnung = function(a, b); {
  return a + b;
}

/*
3. WERTE BESTIMMEN: WELCHE WERTE NEHMEN DIE PARAMETER AN?
    Zeile 22 Variable:Lösung enthält die Variable Berechnung und definiert die Werte der Parameter 2 und 3 
4. AUSGABE
    Zeile 23 Console.log gibt die Variable Lösung aus 
*/

let Lösung = Berechnung(2, 3);
console.log(Lösung);
