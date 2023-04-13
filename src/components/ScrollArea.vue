<script setup>
import { onMounted, watch, ref } from 'vue';

const appData = defineProps(['app'])
const scrollAreaEl = ref(null)
watch(appData.app, data => {
  // console.log(data.series[0].data.length)
  if(!data.series[0].data.length) {
    scrollAreaEl.value.scrollTop = 0
  }
})
</script>

<template>
  <div class="p-4 pt-0 relative">
    <!-- <div @scroll="app.updateScrollPos" @click="app.updateScrollPos"
          class="w-full rounded-xl bg-green-50 border-4 border-green-600 border-dashed overflow-auto h-full"> -->
    <div ref="scrollAreaEl" @scroll="app.updateScrollPos"
      class="w-full rounded-xl bg-green-200 overflow-auto h-full">
      <p
        class="text-l text-green-600 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 p-4 rounded">
        scroll here</p>
      <div class="h-[7600px] p-4">
        <h1 class="text-center my-5 mt-2 text-lg">Lorem Ipsum</h1>
        <div class="space-y-3">
          <p>
            Quisque laoreet velit in scelerisque molestie. Aliquam sed est diam. Fusce pellentesque bibendum ipsum nec
            interdum. Sed ut nulla gravida, vehicula ante vitae, interdum quam. Aliquam a scelerisque sapien, ut vulputate
            magna. Etiam congue neque nibh, non auctor ipsum aliquet non. Vivamus fermentum nec eros eu pretium. Sed non
            libero ultricies, egestas lacus nec, fringilla neque. Aliquam condimentum, nisi id sodales ornare, est orci
            lobortis mi, sit amet tincidunt ex risus vel nisl. Sed a luctus libero. Nam id lorem tristique, ultrices risus
            sit amet, ultricies libero. Aliquam vitae cursus nisl. Nunc ac volutpat odio. Nam sodales sed dolor vel
            commodo.
          </p>
          <p>
            Cras ut dolor et ipsum commodo posuere ac ac purus. Praesent blandit et dolor et molestie. Praesent tincidunt
            mi velit, eget ornare tellus convallis luctus. Morbi id posuere nulla. Nam id porttitor augue. Mauris vel
            maximus urna, sit amet sollicitudin arcu. Nam pellentesque ante in magna scelerisque venenatis.
          </p>
          <p>
            In sem ex, euismod ut orci eget, porttitor condimentum lectus. Suspendisse est eros, pharetra at ante eget,
            porta commodo neque. In dapibus mi lacus, ut finibus sapien molestie ac. Nam rutrum magna a commodo maximus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam eu nisl
            mollis, faucibus diam vel, imperdiet enim. Pellentesque cursus condimentum sapien, sit amet sagittis nulla
            dignissim a. Duis ornare maximus luctus. Pellentesque laoreet lacus nec justo facilisis rutrum a in massa.
            Nulla gravida nisi non magna gravida, et iaculis urna tincidunt. Donec faucibus aliquet condimentum. Phasellus
            venenatis diam a convallis rutrum. Etiam tincidunt dui a mauris placerat rutrum. Proin iaculis auctor nisl sit
            amet fringilla.
          </p>
          <p>
            Mauris finibus convallis ex ac lobortis. Etiam nec ultrices erat. Curabitur pulvinar nisl et lectus tempor, in
            rhoncus odio efficitur. Nulla condimentum sodales sem, vitae pharetra lorem sollicitudin sit amet. Nullam ut
            tristique mi. Pellentesque maximus rutrum ante, in porttitor libero aliquam fringilla. Nulla condimentum sem
            ornare magna consequat fringilla. Sed ac ultrices elit, at mollis felis. Nullam gravida vitae justo nec
            laoreet. Maecenas hendrerit non sapien nec porttitor. Etiam eu auctor nunc. Duis congue blandit dui ac
            tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Nullam at ultricies elit, et ornare risus. Vivamus sodales tincidunt sapien id tristique. Mauris aliquam dui
            massa, eu pulvinar ante blandit et. Pellentesque diam ex, tempus hendrerit mauris ac, laoreet lobortis sem.
            Vestibulum magna enim, rutrum non sodales eu, laoreet quis metus. Ut egestas gravida tempus. Suspendisse
            consectetur metus eget libero pharetra aliquam eget quis eros.
          </p>
          <p>
            Nam mollis hendrerit sapien, ut varius urna. Nunc vel massa sem. Praesent scelerisque ipsum nulla, at
            porttitor ex laoreet sodales. Praesent non bibendum purus. Ut nec ligula sed mi euismod bibendum vitae vel
            risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget pretium sapien. Nam imperdiet
            scelerisque ex, id aliquam felis accumsan nec. Nunc sollicitudin mi in velit tempor gravida. Nam cursus dolor
            sed ligula rutrum fringilla nec sed nulla. Aenean dictum mollis lectus vel gravida. Fusce maximus sodales urna
            eget blandit. Nunc ut felis ultrices, fermentum purus a, commodo est. In at elit id est tincidunt maximus sit
            amet at massa. Nulla quis lacus at lorem maximus hendrerit in pretium purus. In sed ante quam.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget
            libero risus. Mauris eget tellus et felis accumsan ultricies. Proin egestas risus risus. Nulla convallis
            condimentum sapien, id luctus leo varius at. Vestibulum imperdiet sollicitudin enim, nec sollicitudin ante
            tempor et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          </p>
          <p>
            Nunc condimentum lectus at libero faucibus, non accumsan dui fermentum. Nullam ornare, sapien vitae pulvinar
            aliquet, augue ligula elementum orci, at varius ipsum sapien sed mi. Ut eget sagittis lectus, vitae rutrum
            magna. Sed pharetra libero ac justo tristique, sed gravida justo commodo. Aliquam fermentum massa sed erat
            bibendum consequat. Aenean non luctus leo. Duis sed leo hendrerit, imperdiet sem eu, gravida nisl. Ut ipsum
            dolor, pulvinar non arcu sed, pharetra lacinia lorem. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean sodales ex dictum urna blandit suscipit. Quisque justo lorem, porta sit
            amet efficitur id, hendrerit quis enim. Aenean lacinia faucibus ante, sed mattis ipsum rhoncus at.
            Pellentesque sit amet placerat elit. Pellentesque vel tristique purus.
          </p>
          <p>
            Donec scelerisque consectetur lacus quis molestie. Cras ultrices magna massa, id ultrices dui venenatis nec.
            Proin lobortis metus in porttitor imperdiet. Etiam quis nunc blandit, cursus dolor nec, maximus sapien. Ut nec
            maximus turpis. Donec egestas enim nulla, a lacinia ante mattis sed. Ut porta elit ac leo cursus, sed gravida
            augue tempus. Vivamus consequat nisi eget arcu rutrum sodales.
          </p>
          <p>
            Etiam eget scelerisque lacus. Maecenas suscipit, metus sit amet ultricies lobortis, nulla nisi tempus eros, in
            tristique leo sem ut magna. In ligula massa, elementum in dui non, vehicula egestas ipsum. Aliquam viverra
            ultrices fermentum. Donec pellentesque, lorem eget viverra cursus, ante nisl mattis enim, id aliquam arcu odio
            eget est. Curabitur vitae urna accumsan, posuere eros quis, maximus odio. Morbi malesuada bibendum turpis,
            eget feugiat nisl eleifend vel.
          </p>
          <p>
            Suspendisse nunc nisi, sodales et lacus a, maximus luctus ante. Donec vitae metus non leo fermentum tincidunt
            sed vel ex. Integer purus quam, convallis vitae metus vitae, tristique cursus metus. Nulla rhoncus tortor at
            leo tincidunt laoreet. Nullam interdum vel ante vitae aliquam. Sed dignissim odio at volutpat gravida. Etiam
            in enim ut purus imperdiet pulvinar non id nisl. Etiam lobortis sed urna vitae vehicula. Donec pretium nisl
            quis tristique viverra. Donec magna felis, dictum ut lectus eget, convallis ultricies dui. Nam varius auctor
            elit, vitae auctor libero aliquam ut. Aenean vel ex bibendum, fermentum lorem ut, dapibus urna. Fusce
            sagittis, justo in vulputate tristique, ipsum urna efficitur risus, sed cursus odio nibh eget lacus. Aliquam
            erat volutpat. Suspendisse congue consequat iaculis. Sed nisl arcu, semper ac fermentum sit amet, aliquet ac
            nisl.
          </p>
          <p>
            Maecenas et efficitur orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vestibulum
            magna in urna tincidunt lobortis. Ut turpis velit, aliquet ut lectus ac, molestie hendrerit nibh. Vestibulum
            eu dui suscipit, rhoncus odio id, imperdiet quam. Morbi accumsan varius nisi. Vestibulum viverra, diam dictum
            imperdiet egestas, velit dui tincidunt nisl, sit amet laoreet diam felis sed nisl. Nullam eu est eget ante
            sollicitudin euismod. Donec dictum tellus eget justo mollis, sagittis lacinia diam porta. Nullam commodo porta
            pulvinar. Praesent tortor massa, finibus vel finibus quis, convallis at diam. Quisque euismod hendrerit
            tortor, a laoreet risus tincidunt at.
        </p>
        <p>
          Suspendisse vel consequat quam, ut lobortis metus. Mauris quis placerat quam. In nunc quam, rhoncus quis
          aliquet ac, congue nec purus. Sed non tellus lacinia, fermentum massa id, consequat magna. Aliquam dolor nunc,
          tincidunt in pharetra a, congue vitae est. Fusce consectetur, magna ut imperdiet sodales, tellus enim luctus
          quam, at dictum velit risus non nulla. Curabitur quis molestie mi. Ut vitae dignissim massa.
        </p>
        <p>
          Suspendisse quis massa mi. Nulla ex ligula, tempus ut risus id, suscipit pellentesque risus. Aliquam blandit
          sit amet nulla non maximus. Pellentesque nec nisi accumsan, tincidunt nulla eget, molestie ante. Fusce a
          cursus nibh, at mattis ex. Sed euismod convallis luctus. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Morbi semper, elit nec tristique lacinia, diam velit iaculis elit, non
          faucibus dolor lorem et mi.
        </p>
        <p>
          Morbi luctus nisi in euismod pharetra. Quisque urna purus, rutrum ac lectus sit amet, luctus tempor velit.
          Vestibulum eget placerat nisl. Aenean blandit nibh eget convallis luctus. Sed mollis eu eros vel ornare.
          Vestibulum eget tempus arcu. Donec eget ex vel odio mollis blandit non vitae sapien. Fusce auctor tristique
          odio id tristique. Pellentesque vitae gravida ligula, a efficitur ex. Cras pellentesque rutrum eros, a feugiat
          mi vestibulum sed. Fusce eleifend gravida tellus at tempor.
        </p>
        <p>
          Sed cursus mattis elit, ac consectetur velit porta quis. Aliquam pretium accumsan viverra. Proin vitae
          venenatis turpis, in aliquet quam. Vestibulum tincidunt consectetur massa, sed interdum sapien ultricies sed.
          Aliquam sed tellus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus tincidunt dui
          in placerat pretium. Nullam ultricies placerat semper. Sed dictum purus nec sodales vestibulum. Duis vehicula
          ornare eros vel viverra. Sed et ligula consequat, ultricies dui id, tempor nisi. Praesent cursus venenatis
          diam id rutrum. Integer ut accumsan elit, tincidunt pharetra dolor. Sed eu hendrerit enim, ac eleifend est.
          Nunc sit amet justo leo. Sed gravida venenatis sodales.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam pulvinar
          porttitor sapien id lobortis. Morbi pulvinar nunc vitae mi tincidunt malesuada. Fusce ut risus nunc. In hac
          habitasse platea dictumst. Aliquam in quam lacus. Etiam id porttitor lorem, et cursus felis. Vestibulum nec
          convallis eros. Etiam convallis tincidunt egestas. Phasellus et ex nec ligula convallis euismod non vitae
          quam. Phasellus gravida, nulla ut facilisis cursus, ipsum risus eleifend diam, ac pretium ligula sem eget
          magna. Duis eget tellus odio.
        </p>
        <p>
          Integer ultrices tincidunt tortor, vitae pharetra sapien tempus vitae. Pellentesque blandit semper nibh, ut
          iaculis arcu tempus in. Ut eleifend dolor eget orci feugiat, vitae egestas tortor pharetra. Fusce eget risus
          ut metus gravida fermentum. Praesent sit amet mi ligula. Nulla sed condimentum est, eget ullamcorper erat.
          Nulla quis enim massa.
        </p>
        <p>
          Donec vel convallis massa, non blandit velit. Donec malesuada eros ac est scelerisque, eget pharetra ipsum
          sollicitudin. Fusce facilisis dictum tortor, sit amet ultricies mauris dapibus non. Ut gravida ligula nec
          lectus mollis, sed varius risus cursus. Vivamus nec est et mi aliquam venenatis. Nulla faucibus augue justo,
          in commodo tellus porttitor ut. Donec euismod nunc at justo semper cursus. Donec ac porta dolor. Praesent
          nulla elit, placerat id fringilla in, pretium eu metus. Vivamus aliquam gravida purus, non varius nulla. Nulla
          rhoncus aliquet tellus, sed pharetra lectus. Cras sit amet nisl imperdiet, volutpat mi id, pretium ante.
        </p>
        <p>
          Nam id ante sit amet dolor fringilla tristique non sit amet lacus. Maecenas nec sagittis arcu. In hac
          habitasse platea dictumst. In ut purus nibh. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Sed blandit viverra malesuada. Sed semper sit amet augue sit amet semper. Duis
          imperdiet elit non eros elementum laoreet.
        </p>
        <p>
          Maecenas pellentesque sem vitae ipsum suscipit porttitor. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Duis tempus ante non dolor iaculis, eget mattis elit viverra.
          Vestibulum eget fermentum nisi, vitae ornare ante. Curabitur accumsan pharetra dui, ut sodales velit viverra
          eget. Aenean vel leo aliquam, lacinia quam in, imperdiet turpis. Curabitur luctus justo vel molestie posuere.
          Integer ultrices dui vitae augue ullamcorper viverra.
        </p>
        <p>
          Donec id convallis risus, quis fringilla leo. Morbi non enim egestas, euismod metus vitae, viverra sapien.
          Vestibulum convallis sollicitudin mi ac sollicitudin. Sed viverra est at dolor volutpat, vel dictum orci
          accumsan. In vel diam at felis pharetra vehicula ut at tortor. Nam mattis accumsan posuere. Vestibulum tempus,
          nisi at condimentum porta, eros libero ullamcorper sapien, gravida venenatis nisl odio id nibh. Vestibulum sem
          lacus, laoreet ut aliquam eu, volutpat nec nunc. Pellentesque in leo est. Curabitur bibendum at tellus ut
          commodo. Fusce vulputate posuere enim, nec posuere justo luctus sit amet.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam accumsan
          purus nec sapien porttitor, sed iaculis est molestie. Curabitur iaculis risus tellus, nec mollis dui posuere
          ac. Sed rhoncus arcu sed augue volutpat lobortis. Maecenas tempus in mi id pretium. Etiam eu nunc nec odio
          venenatis eleifend. Suspendisse fringilla ultricies tortor vitae pellentesque. Fusce turpis diam, posuere id
          dolor ac, viverra bibendum metus. Vestibulum ipsum dui, tristique eu erat ac, ullamcorper blandit est. Nam a
          convallis lectus. Morbi placerat arcu in neque pharetra accumsan. Ut egestas, magna vitae consequat molestie,
          dolor massa maximus erat, eu eleifend urna turpis quis urna. Donec nec auctor libero. Sed a ligula a nunc
          dignissim sagittis quis mollis lacus. Maecenas convallis enim at interdum hendrerit. Mauris in maximus velit,
          eu lobortis tellus.
        </p>
        <p>
          Proin sit amet nisl ex. Sed mattis ultricies urna at pharetra. Proin volutpat arcu libero, et posuere neque
          mattis vulputate. Etiam vitae turpis eros. Nullam tempor dignissim magna, a consectetur nisl. Nam at diam sit
          amet justo euismod tempor. Nullam et bibendum leo. Vivamus placerat orci in neque volutpat congue. Nunc
          venenatis, eros eget porttitor rhoncus, ex purus tristique justo, et eleifend sapien massa sed magna. Morbi
          urna nisi, dictum vel euismod a, elementum ac ligula.
        </p>
        <p>
          Nulla ut bibendum sem. Proin in sem augue. Suspendisse potenti. In eleifend purus sed bibendum semper. Etiam
          ultrices mattis lacus consectetur molestie. Cras tincidunt, mauris nec rutrum vestibulum, risus magna laoreet
          urna, id condimentum elit felis quis est. Vestibulum fringilla nisi vel nunc congue, in viverra arcu
          tincidunt. Phasellus sagittis, nisi et dictum sollicitudin, felis dolor rhoncus nisl, sed viverra nulla purus
          sed augue. Maecenas eu eros libero.
        </p>
        <p>
          Integer efficitur at ipsum a finibus. In bibendum lacus quis lorem sagittis dapibus. Mauris faucibus commodo
          lacus, non malesuada enim maximus vel. Nulla facilisi. Morbi euismod lacinia enim fermentum porttitor. Etiam
          ac lacus vitae tortor eleifend scelerisque nec sit amet urna. Nullam molestie a elit in pharetra. Mauris a
          diam molestie, maximus lectus ut, dapibus eros. Phasellus vestibulum molestie nulla, nec posuere libero varius
          ac. Duis accumsan risus eu luctus dignissim. Nunc imperdiet placerat tortor vitae varius. Nulla facilisi.
        </p>
        <p>
          Sed accumsan tortor quis tristique ultricies. Donec nunc dolor, interdum at ullamcorper ut, auctor id augue.
          Nunc semper, felis ut porttitor commodo, sapien arcu dapibus ante, sed eleifend justo est a leo. Nunc ac
          ullamcorper sapien. Curabitur at mauris at mauris scelerisque ullamcorper eget id est. Sed sollicitudin
          fringilla lectus id vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Quisque consequat quam at porttitor feugiat. Quisque ac finibus massa. Morbi sodales justo
          non fermentum imperdiet. Curabitur ultrices luctus consectetur. In id fringilla ex, non rutrum ante.
        </p>
        <p>
          Praesent sapien elit, egestas nec commodo a, tempus faucibus ligula. Aenean eget ligula vel augue hendrerit
          facilisis. Proin maximus arcu et convallis pulvinar. Morbi imperdiet odio in mi efficitur efficitur. Donec
          laoreet, tellus a rhoncus pharetra, libero lacus finibus purus, quis egestas erat neque lobortis ligula. Sed
          ultrices suscipit elit eu finibus. Vestibulum iaculis eu neque a scelerisque. Donec bibendum velit a lorem
          consequat, efficitur elementum ligula interdum. Quisque quam ante, feugiat non ligula in, consequat tincidunt
          justo. Nunc feugiat nisl porta, venenatis turpis ut, laoreet risus. Nunc felis diam, imperdiet quis porta ac,
          vulputate imperdiet ante. Phasellus accumsan lorem tortor, sed faucibus lorem elementum eu. Morbi eget rutrum
          sapien.
        </p>
        <p>
          Nullam in molestie eros. Mauris purus erat, porta et mauris quis, hendrerit laoreet ex. Aenean sollicitudin
          tellus et mollis volutpat. Quisque gravida libero purus, et vehicula dui tempus sit amet. Etiam quis odio
          pretium, tristique sem vel, placerat mi. Ut eget venenatis leo, et semper arcu. Nam porttitor malesuada purus,
          sit amet molestie sapien egestas vitae. Morbi dapibus dui tristique lorem posuere, id consectetur justo
          gravida. Vestibulum finibus ut turpis sed pretium.
        </p>
        <p>
          Curabitur at commodo libero, vel mattis felis. Suspendisse non sodales lectus, et maximus nulla. Donec
          tristique massa non tellus accumsan cursus. Nulla in enim sit amet arcu aliquet facilisis. Mauris posuere
          lobortis mi, vel imperdiet velit. Nulla volutpat imperdiet est, vel tristique arcu aliquet nec. Aliquam erat
          volutpat. Morbi rhoncus libero a erat ultrices, quis vestibulum ipsum sodales. Phasellus sagittis fermentum
          felis quis congue. Aenean et dolor nec enim cursus fringilla. Cras in posuere eros, sed aliquet odio. Nulla
          gravida ipsum nisl, sit amet accumsan lacus eleifend ut. Suspendisse potenti. Vivamus et erat eget mauris
          blandit mattis nec ut augue. Donec porttitor egestas consequat.
        </p>
      </div>
    </div>
  </div>
</div></template>
