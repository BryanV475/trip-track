package com.bryanv475.triptrack_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bryanv475.triptrack_backend.enums.ExpenseStatus;
import com.bryanv475.triptrack_backend.model.Expense;
import com.bryanv475.triptrack_backend.service.ExpenseService;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Expense> getExpenseById(@PathVariable Long id) {
        return expenseService.getExpenseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

     @GetMapping("/status/{status}")
    public List<Expense> getExpensesByStatus(@PathVariable ExpenseStatus status) {
        return expenseService.getExpensesByStatus(status);
    }

    @GetMapping("/author/{authorId}")
    public List<Expense> getExpensesByAuthor(@PathVariable String authorId) {
        return expenseService.getExpensesByAuthor(authorId);
    }

    @PostMapping
    public ResponseEntity<Expense> createExpense(@RequestBody Expense expense) {
        return ResponseEntity.ok(expenseService.createExpense(expense));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Expense> updateExpense(@PathVariable Long id, @RequestBody Expense expense) {
        if (!expenseService.getExpenseById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        expense.setId(id);
        return ResponseEntity.ok(expenseService.updateExpense(expense));
    }

}
