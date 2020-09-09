//Learned that "final" is a keyword in Java
class Solution {
    public int reverse(int x) {
        
        int fin=0,temp,otra;
        
        while(x != 0){
            
            temp=fin*10;
            otra=x%10;
            
            if(temp%10 != 0){
                return 0;
            }
            
            fin=temp+otra;
            x=x/10;
            
        }
        
        return fin;
        
    }
}