package com.example.plantgreenhouse.model;

import javax.persistence.*;
import javax.validation.constraints.*;

import lombok.*;

@Entity
@Table(name = "families")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Family {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int familyId;

    @NotNull
    @Size(min = 5, max = 30, message = "Please, provide a name of the length between 5 and 30 characters.")
    @Column(name = "name")
    private String name;
}
