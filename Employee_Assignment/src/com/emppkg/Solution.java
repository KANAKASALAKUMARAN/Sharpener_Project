package com.emppkg;
import java.util.ArrayList;
import java.util.Scanner;
public class Solution {
	
	private static double findAverageSalary(ArrayList<Employee> list) {
		
		int count=list.size();
		double sumSalary=0;
		
		for(int i=0; i< list.size(); i++) {
			
			sumSalary+= list.get(i).getSalary();
			
		}
		
		double avgSalary = sumSalary / count; //finding the average salary
		return avgSalary;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		int n=3;
		
		ArrayList<Employee> list=new ArrayList<>();
		
		for(int i=0;i<n;i++) {
			
            System.out.println("Enter Employee ID: ");
            int empId = sc.nextInt();
            sc.nextLine();
            
            System.out.println("Enter Employee Name: ");
            String empName = sc.nextLine();
            
            System.out.println("Enter Employee Salary: ");
            double salary = sc.nextDouble();
            
            System.out.println("Enter Employee Experience: ");
            int experience = sc.nextInt();
            
            Employee e=new Employee(empId, empName, salary, experience);
            
            list.add(e);
            e.computeDesignation();
            e.printEmployeeDetails(); 
		}
		
		double avgSalary = findAverageSalary(list);
		
		System.out.println("Average Salary : "+ avgSalary);
		
		sc.close();

	}

}
