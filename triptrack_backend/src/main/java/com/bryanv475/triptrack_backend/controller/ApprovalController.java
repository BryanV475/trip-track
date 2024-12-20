package com.bryanv475.triptrack_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bryanv475.triptrack_backend.model.Approval;
import com.bryanv475.triptrack_backend.service.ApprovalService;

@RestController
@RequestMapping("/api/approvals")
@CrossOrigin(origins = "*")
public class ApprovalController {

    @Autowired
    private ApprovalService approvalService;

    @GetMapping("/expense/{expenseId}")
    public ResponseEntity<Approval> getApprovalByExpenseId(@PathVariable Long expenseId) {
        return approvalService.getApprovalByExpenseId(expenseId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/expense/{expenseId}")
    public ResponseEntity<Approval> createApprovalForExpense(@PathVariable Long expenseId, @RequestBody Approval approval) {
        return approvalService.createApprovalForExpense(expenseId, approval)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
