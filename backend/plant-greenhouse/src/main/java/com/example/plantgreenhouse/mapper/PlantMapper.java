package com.example.plantgreenhouse.mapper;

import com.example.plantgreenhouse.model.dto.PlantDto;
import com.example.plantgreenhouse.model.Plant;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PlantMapper {
    @Mapping(source = "familyId", target = "family.familyId")
    Plant toEntity(PlantDto plantDto);

    PlantDto toDto(Plant plant);
}
