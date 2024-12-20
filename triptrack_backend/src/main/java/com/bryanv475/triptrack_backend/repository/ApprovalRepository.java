package com.bryanv475.triptrack_backend.repository;

import com.bryanv475.triptrack_backend.model.Approval;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ApprovalRepository extends JpaRepository<Approval, Long> {

    Optional<Approval> findByExpenseId(Long expenseId);
}
