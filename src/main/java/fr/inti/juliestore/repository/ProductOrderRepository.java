package fr.inti.juliestore.repository;

import fr.inti.juliestore.domain.ProductOrder;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the ProductOrder entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductOrderRepository extends MongoRepository<ProductOrder, String> {

}
