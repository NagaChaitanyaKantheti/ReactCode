import java.lang.*;

class Mutable{
    public static void main(String args[]){
        String s="hello";
        String s1="hello";
        String s2="hello";
        s2="world";
        System.out.println(s);
        System.out.println(s1);
        System.out.println(s2);
    }
}