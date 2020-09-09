public class Solution {
    public int Reverse(int x) {
        int temp,otra,final=0;
        
        while(x != 0){
            
            temp=final*10;
            otra=x%10;
            
            if(temp%10 != 0){
                return 0;
            }
            
            final=temp+otra;
            x=x/10;
            
        }
        
        return final;
    }
}

/*
I originally made this solution, but I didn't know what to do in case it went overflow, so I did some testing and using if(temp%10 != 0) seemed the easiest way.
public class Solution {
    public int Reverse(int x) {
        
        int a=0;
        bool b=false;
        
       if(x<0){
            x=x*-1;
            b=true;
            
        }
        while(x>0){
            a=a*10+x%10;
            x=x/10;
        }
        
        if(b==true){
            a=a*-1;
        }
        return a;
    }
}
*/