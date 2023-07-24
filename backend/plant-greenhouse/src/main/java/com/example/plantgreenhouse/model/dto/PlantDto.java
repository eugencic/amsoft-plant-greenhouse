package com.example.plantgreenhouse.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlantDto {
    @JsonProperty("plantId")
    private int plantId;
    @JsonProperty("name")
    private String name;
    @JsonProperty("species")
    private String species;
    @JsonProperty("nativeRegion")
    private String nativeRegion;
    @JsonProperty("familyId")
    private int familyId;
}
