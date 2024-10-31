

<template>



    <div>
     <SidebarArea/>
       <SidebarArea2/>
      <!-- <ChartOne />
    

    
      <ChartTwo />
     

     
      <ChartThree />
   
      <MapOne /> -->
    
      <!-- <div class="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
   
      <ChatCard />
      -->
    </div>

  
</template>
<script>
 import DataStatsOne from '@/components/DataStats/DataStatsOne.vue'
import ChartOne from '@/components/Charts/ChartOne.vue'
 import ChartThree from '@/components/Charts/ChartThree.vue'
 import ChartTwo from '@/components/Charts/ChartTwo.vue'
//  import ChatCard from '@/components/ChatCard.vue'
 import MapOne from '@/components/Maps/MapOne.vue'
 import TableOne from '@/components/Tables/TableOne.vue'
 import DefaultLayout from '@/layouts/DefaultLayout.vue'
 import SidebarArea from '@/components/Sidebar/SidebarArea.vue'
 import SidebarArea2 from '@/components/Sidebar/SidebarArea2.vue'


export default {
components:{DataStatsOne,ChartOne,ChartThree,ChartTwo,MapOne,TableOne,DefaultLayout,SidebarArea,SidebarArea2},
    data() {
      return {

      }
    },
   
}
//ChatCard
</script>