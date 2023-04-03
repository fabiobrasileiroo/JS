#include <stdio.h>
#include <stdlib.h>

int main (void) {
   double entrada, quintaParte;
   printf ("Digite um numero: \n");

   scanf ("%lf", &entrada);

   quintaParte = entrada * 1/5;
   printf ("A quinta parte de %lf eh: \n %lf\n",  entrada, quintaParte);

   return 0;
}
