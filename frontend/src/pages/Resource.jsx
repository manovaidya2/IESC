import React from "react";
import ResourcesHeroSection from "../resource/ResourcesHeroSection";
import ResourceCategoriesSection from "../resource/ResourceCategoriesSection";
import FeaturedResourcesSection from "../resource/FeaturedResourcesSection";
import ResourceLibraryGlanceSection from "../resource/ResourceLibraryGlanceSection";


function Resources() {
  return (
    <>
<ResourcesHeroSection />
<ResourceCategoriesSection />   
<FeaturedResourcesSection />
<ResourceLibraryGlanceSection />
    </>
  );
}

export default Resources;