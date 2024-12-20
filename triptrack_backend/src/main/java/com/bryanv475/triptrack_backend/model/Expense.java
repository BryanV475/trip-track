package com.bryanv475.triptrack_backend.model;

import java.time.LocalDate;

import com.bryanv475.triptrack_backend.enums.ExpenseStatus;
import com.bryanv475.triptrack_backend.enums.ExpenseType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "expenses")
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String author;
    private String authorId;

    private String reason;
    private String clientName;

    @Enumerated(EnumType.STRING)
    private ExpenseType type;

    @Enumerated(EnumType.STRING)
    private ExpenseStatus status;

    private LocalDate registrationDate;

    private LocalDate tripDate;
    private LocalDate invitationDate;
    
}
