package com.emppkg;

public class Employee {
	private int empId;
	private String empName;
	private double salary;
	private int experience;
	private String designation;
	
	public Employee(int empId, String empName, double salary, int experience) {
		this.empId = empId;
		this.empName = empName;
		this.salary = salary;
		this.experience = experience;
	}
	
	public void computeDesignation() {

        if (getExperience() >= 10)
            setDesignation("PM");
        
        else if (getExperience() > 7 && getExperience() <= 9)
        	setDesignation("PL");
        
        else if (getExperience() > 5 && getExperience() <= 7)
        	setDesignation("SSE");
        
        else if (getExperience() > 1 && getExperience() <= 5)
        	setDesignation("SE");
        
        else
        	setDesignation("TR");
    }
	
	public void printEmployeeDetails() {
		
		System.out.println("\nEmployee Details");
        System.out.println("Employee ID : " + getEmpId());
        System.out.println("Employee Name : " + getEmpName());
        System.out.println("Salary : " + getSalary());
        System.out.println("Experience : " + getExperience());

        switch (getDesignation()) {

            case "PM":
                System.out.println("Designation : PM (Project Manager)");
                break;

            case "PL":
                System.out.println("Designation : PL (Project Lead)");
                break;

            case "SSE":
                System.out.println("Designation : SSE (Senior Software Engineer)");
                break;

            case "SE":
                System.out.println("Designation : SE (Software Engineer)");
                break;

            case "TR":
                System.out.println("Designation : TR (Trainee)");
                break;

            default:
                System.out.println("Invalid Designation");
        }
        System.out.println();
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

}
