package com.example.Group17.model;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)


public class Users {

    @Id
	@NotNull
    private Integer User_Id;

    @NotNull
    private String First_Name;

    @NotNull
    private String Last_Name;

    @NotNull
    private String Date_Of_Birth;

    @NotNull
    private static Double weight;

    @NotNull
    private static Double height;

    

    public Users()
    {

    }
    public Users(@NotNull Integer User_Id, @NotNull String First_Name, @NotNull String Last_Name, @NotNull String Date_Of_Birth, @NotNull Double weight, @NotNull Double height) {
		super();
		this.User_Id = User_Id;
		this.First_Name = First_Name;
		this.Last_Name = Last_Name;
		this.Date_Of_Birth = Date_Of_Birth;
        this.weight = weight;
        this.height = weight;
	}

    public Integer getUserId() {
		return User_Id;
	}

	public void setClientId(Integer User_Id) {
		this.User_Id = User_Id;
	}

    public String getFirstName() {
		return First_Name;
	}

	public void setFirstName(String First_Name) {
		this.First_Name = First_Name;
	}

    public String getLastName() {
		return Last_Name;
	}

	public void setLastName(String Last_Name) {
		this.Last_Name = Last_Name;
	}

    public String getDOB() {
		return Date_Of_Birth;
	}

	public void setEmail(String Date_Of_Birth) {
		this.Date_Of_Birth = Date_Of_Birth;
	}

    public static Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public static Double getHeight() {
		return height;
	}
}