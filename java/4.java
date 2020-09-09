class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    float respuesta;        
    int aLen = nums1.length;
    int bLen = nums2.length;
    int[] arreglo = new int[aLen + bLen];
    System.arraycopy(nums1, 0, arreglo, 0, aLen);
    System.arraycopy(nums2, 0, arreglo, aLen, bLen);
        
    
    Arrays.sort(arreglo);       
    if(arreglo.length==0){
        return 0;
    }else{
        if(arreglo.length==1){
            return arreglo[0];
        }else{
            if(arreglo.length%2==0){
                respuesta=arreglo[arreglo.length/2]+arreglo[(arreglo.length/2)-1];
                respuesta=respuesta/2;
            }else{respuesta=arreglo[arreglo.length/2];
                
            }
        }
    }
        return respuesta;
        
    }
}