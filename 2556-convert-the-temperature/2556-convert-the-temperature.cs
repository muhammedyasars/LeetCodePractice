public class Solution {
    public double[] ConvertTemperature(double celsius) {
        double[] arr=new double[2];
        arr[0]=celsius+273.15;
        arr[1]=celsius*1.8+32;
        return arr;

        
    }
}