//This was my first Leetcode "hard" question and it is faster than 83.59% of the C# submissions :)

public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
    float respuesta;
    var myList = new List<int>();
    myList.AddRange(nums1);
    myList.AddRange(nums2);
    int[] arreglo = myList.ToArray();
    Array.Sort(arreglo);       
    if(arreglo.Length==0){
        return 0;
    }else{
        if(arreglo.Length==1){
            return arreglo[0];
        }else{
            if(arreglo.Length%2==0){
                respuesta=arreglo[arreglo.Length/2]+arreglo[(arreglo.Length/2)-1];
                respuesta=respuesta/2;
            }else{respuesta=arreglo[arreglo.Length/2];
                
            }
        }
    }
        return respuesta;

    }
}