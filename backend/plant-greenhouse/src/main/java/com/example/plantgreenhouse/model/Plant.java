package com.example.plantgreenhouse.model;

import javax.persistence.*;
import javax.validation.constraints.*;

import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "plants")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int plantId;

    @NotBlank
    @Size(min = 5, max = 15, message = "Please, provide a name of the length between 5 and 15 characters.")
    @Column(name = "name")
    private String name;

    @NotBlank
    @Size(min = 5, max = 20, message = "Please, provide a species of the length between 5 and 20 characters.")
    @Column(name = "species")
    private String species;

    @NotNull
    @Size(min = 2, max = 20, message = "Please, provide a native region of the length between 2 and 20 characters.")
    @Column(name = "native_region")
    private String nativeRegion;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "family_id")
    private Family family;
}
