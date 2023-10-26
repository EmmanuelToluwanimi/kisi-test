<template>
  <main class="general-wrapper">

    <div class="overlap">

      <div class="phase-1">

        <div class="phase-1-block-1">
          <div class="block-1-title">
            Connect people & spaces
          </div>
          <div v-if="imageArticle[0]" class="block-1-0 relative" @mouseover="HandleHover(99)" @mouseout="HandleHover()">
            <img :src="imageArticle[0]?.image" loading="lazy" class="card-img" alt="lorem">
            <div class="card-backdrop" :class="hoveredIndex === 99 ? 'hover-bg' : 'ordinary-bg'">
              <div class="card-description">
                <div class="card-title">{{ imageArticle[0]?.title }}</div>
                <div v-if="hoveredIndex === 99" class="card-caption">
                  {{ imageArticle[0]?.description }}
                </div>
              </div>

              <CardButton />
            </div>
          </div>
        </div>

        <div v-if="imageArticle[1]" class="phase-1-block-2 relative " @mouseover="HandleHover(1)"
          @mouseout="HandleHover()">
          <img :src="imageArticle[1]?.image" loading="lazy" class="card-img" alt="lorem">
          <div class="card-backdrop" :class="hoveredIndex === 1 ? 'hover-bg' : 'ordinary-bg'">
            <div class="card-description">
              <div class="card-title">{{ imageArticle[1]?.title }}</div>
              <div v-if="hoveredIndex === 1" class="card-caption">
                {{ imageArticle[1]?.description }}
              </div>
            </div>

            <CardButton />
          </div>
        </div>

      </div>

      <div class="phase-2">

        <div class="phase-2-block-1">
          <div class="level-1">
            <div v-if="imageArticle[2]" class="relative block-3-1 " @mouseover="HandleHover(2)" @mouseout="HandleHover()">
              <img :src="imageArticle[2]?.image" loading="lazy" class="card-img" alt="lorem">
              <div class="card-backdrop" :class="hoveredIndex === 2 ? 'hover-bg' : 'ordinary-bg'">
                <div class="card-description">
                  <div class="card-title">{{ imageArticle[2]?.title }}</div>
                  <div v-if="hoveredIndex === 2" class="card-caption">
                    {{ imageArticle[2]?.description.substring(0, 40) + "..." }}
                  </div>
                </div>

                <CardButton />
              </div>
            </div>
            <div v-if="imageArticle[3]" class="relative block-3-2 " @mouseover="HandleHover(3)" @mouseout="HandleHover()">
              <img :src="imageArticle[3]?.image" loading="lazy" class="card-img" alt="lorem">
              <div class="card-backdrop" :class="hoveredIndex === 3 ? 'hover-bg' : 'ordinary-bg'">
                <div class="card-description">
                  <div class="card-title">{{ imageArticle[3]?.title }}</div>
                  <div v-if="hoveredIndex === 3" class="card-caption">
                    {{ imageArticle[3]?.description.substring(0, 30) + "..." }}
                  </div>
                </div>

                <CardButton />
              </div>
            </div>
          </div>
          <div class="level-2">
            <div v-if="imageArticle[4]" class="relative block-3-3 " @mouseover="HandleHover(4)" @mouseout="HandleHover()">
              <img :src="imageArticle[4]?.image" loading="lazy" class="card-img" alt="lorem">
              <div class="card-backdrop" :class="hoveredIndex === 4 ? 'hover-bg' : 'ordinary-bg'">
                <div class="card-description">
                  <div class="card-title">{{ imageArticle[4]?.title }}</div>
                  <div v-if="hoveredIndex === 4" class="card-caption">
                    {{ imageArticle[4]?.description }}
                  </div>
                </div>

                <CardButton />
              </div>
            </div>
          </div>
        </div>

        <div v-if="imageArticle[5]" class="phase-2-block-2 relative" @mouseover="HandleHover(5)"
          @mouseout="HandleHover()">
          <img :src="imageArticle[5]?.image" loading="lazy" class="card-img" alt="lorem">
          <div class="card-backdrop" :class="hoveredIndex === 5 ? 'hover-bg' : 'ordinary-bg'">
            <div class="card-description">
              <div class="card-title">{{ imageArticle[5]?.title }}</div>
              <div v-if="hoveredIndex === 5" class="card-caption">
                {{ imageArticle[5]?.description }}
              </div>
            </div>

            <CardButton />
          </div>
        </div>

        <div class="phase-2-block-3">
          <div v-if="imageArticle[6]" class="block-3-4 relative" @mouseover="HandleHover(6)" @mouseout="HandleHover()">
            <img :src="imageArticle[6]?.image" loading="lazy" class="card-img" alt="lorem">
            <div class="card-backdrop" :class="hoveredIndex === 6 ? 'hover-bg' : 'ordinary-bg'">
              <div class="card-description">
                <div class="card-title">{{ imageArticle[6]?.title }}</div>
                <div v-if="hoveredIndex === 6" class="card-caption">
                  {{ imageArticle[6]?.description }}
                </div>
              </div>

              <CardButton />
            </div>
          </div>
          <div :hidden="imageArticle.length > 7" class="block-3-5">
            <button class="upload-button" @click="ToggleModal">Button</button>
          </div>
        </div>

      </div>

      <div v-if="imageArticle.length > 7" class="phase-3">
        <div v-for="(item, index) in imageArticle.slice(7)" :key="index" class="card"
          @mouseover="HandleHover(7 + index)" @mouseout="HandleHover()">
          <img :src="item.image" class="card-img" alt="lorem">
          <div class="card-backdrop" :class="hoveredIndex === (7 + index) ? 'hover-bg' : 'ordinary-bg'">
            <div class="card-description">
              <div class="card-title">{{ item.title }}</div>
              <div v-if="hoveredIndex === (7 + index)" class="card-caption">
                {{ item.description }}
              </div>
            </div>

            <CardButton />
          </div>
        </div>
        <div class="block-3-5">
          <button class="upload-button" @click="ToggleModal">Button</button>
        </div>
      </div>

      <div v-if="openModal" class="backdrop">
        <div class="modal-wrapper">
          <form @submit="HandleUpload">
            <div class="modal-title">
              <h3>
                Upload New Image
              </h3>
              <div>
                <button type="reset" class="close-btn" @click="ToggleModal">
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 52 52"
                    enable-background="new 0 0 52 52" xml:space="preserve">
                    <path d="M31,25.4L44,12.3c0.6-0.6,0.6-1.5,0-2.1L42,8.1c-0.6-0.6-1.5-0.6-2.1,0L26.8,21.2c-0.4,0.4-1,0.4-1.4,0
	L12.3,8c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l13.1,13.1c0.4,0.4,0.4,1,0,1.4L8,39.9c-0.6,0.6-0.6,1.5,0,2.1
	l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L25.3,31c0.4-0.4,1-0.4,1.4,0l13.1,13.1c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1
	L31,26.8C30.6,26.4,30.6,25.8,31,25.4z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <input type="file" class="file-input" required multiple="false" @change="UploadFile($event)">
            </div>
            <div>
              <button class="upload-btn" type="submit">
                {{ isLoading ? "processing..." : "Upload" }}
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>

  </main>
</template>

<style>
.border {
  border: 1px solid gray;
  border-radius: 4px;
}

.relative {
  position: relative;
}

.general-wrapper {
  width: 100%;
  min-height: 100vh;
  padding: 4rem;
  background: var(--tech-black);
}

.overlap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.phase-1 {
  display: flex;
  gap: 20px;
}

.phase-1-block-1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  width: 404px;
}

.block-1-0 {
  height: 259px;
  flex-shrink: 0;
}

.phase-1-block-2 {
  width: 549px;
  height: 392px;
  flex-shrink: 0;
}

.phase-2 {
  display: flex;
  gap: 20px;
}

.phase-2-block-1 {
  display: flex;
  gap: 20px;
  width: 500px;
  flex-direction: column;
}

.level-1 {
  display: flex;
  gap: 20px;
}

.level-2 {
  display: flex;
  justify-content: right;
}

.block-3-1 {
  width: 312px;
  height: 168px;
}

.block-3-2 {
  width: 200px;
  height: 168px;
}

.block-3-3 {
  width: 317px;
  height: 168px;
}

.phase-2-block-2 {
  width: 420px;
  height: 356px;
}

.phase-2-block-3 {
  display: flex;
  flex-direction: column;
}

.block-3-4 {
  width: 310px;
  height: 220px;
}

.block-1-title {
  color: white;
  font-weight: 400;
  font-size: 28px;
}

.upload-button {
  color: white;
  border-radius: 25px;
  border: none;
  background-color: var(--connect-blue);
  margin-top: 21px;
  padding: 10px 20px;
  cursor: pointer;
}

.phase-3 {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.card {
  width: 25%;
  height: 300px;
}

@media screen and (max-width: 1050px) {

  .general-wrapper {
    width: 100%;
    min-height: 100vh;
    padding: 4rem;
    background: var(--tech-black);
    box-sizing: border-box;
  }
  

  .phase-1 {
    display: flex;
  }

  .phase-1-block-1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
    width: 50%;
  }

  .phase-1-block-2 {
    width: 50%;
  }

  .phase-2 {
    display: flex;
    gap: 20px;
  }

  .phase-2-block-1 {
    display: flex;
    width: 50%;
    flex-direction: column;
  }

  .level-1 {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .level-2 {
    display: flex;
    justify-content: flex-start;
  }

  .block-3-1 {
    width: 100%;
    height: 168px;
  }

  .block-3-2 {
    width: 100%;
    height: 168px;
  }

  .block-3-3 {
    width: 100%;
    height: 168px;
  }

  .phase-2-block-2 {
    width: 50%;
    height: 356px;
  }

  .phase-2-block-3 {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .block-3-4 {
    width: 100%;
    height: 220px;
  }

  .upload-button {
    color: white;
    border-radius: 25px;
    border: none;
    background-color: var(--connect-blue);
    margin-top: 21px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .phase-3 {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }

  .card {
    width: 45%;
  }
}

@media screen and (max-width: 900px) {

  .relative{
    height: auto;
  }

  .general-wrapper {
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: var(--tech-black);
    box-sizing: border-box;
  }

  .phase-1 {
    display: flex;
    flex-direction: column;
  }

  .phase-1-block-1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
    width: 100%;
  }

  .phase-1-block-2 {
    width: 100%;
  }

  .phase-2 {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .phase-2-block-1 {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .level-1 {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .level-2 {
    display: flex;
    justify-content: flex-start;
  }

  .block-3-1 {
    width: 100%;
  }

  .block-3-2 {
    width: 100%;
  }

  .block-3-3 {
    width: 100%;
  }

  .phase-2-block-2 {
    width: 100%;
  }

  .phase-2-block-3 {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .block-3-4 {
    width: 100%;
  }

  .upload-button {
    color: white;
    border-radius: 25px;
    border: none;
    background-color: var(--connect-blue);
    margin-top: 21px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .phase-3 {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }

  .card {
    width: 100%;
  }
}

</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { GetImagesApi, UploadImageApi } from "../service/api";

interface IResponseArticle {
  title: string;
  description: string;
  image: string;
}

const imageArticle = useState<IResponseArticle[]>('imageArticle', () => []);
const imageFile = useState<File | null>('imageFile', () => null);
const openModal = useState<boolean>('openModal', () => false);
const isLoading = useState<boolean>('isLoading', () => false);
const hoveredIndex = useState<number>('hoveredIndex', () => -1);

function HandleHover(params?: number) {
  if (params) {
    hoveredIndex.value = params;
  } else {
    hoveredIndex.value = -1;
  }
}

async function GetImages() {
  try {
    const res = await GetImagesApi();
    imageArticle.value = res.data;
  } catch (error) {
    console.log(error);
  }
}

function UploadFile(e: Event) {
  const fileInputElement = e.target as HTMLInputElement;
  if (!fileInputElement.files) return;
  const file = fileInputElement.files[0];

  imageFile.value = file;
};

async function HandleUpload(e: any) {
  e.preventDefault();

  const formData = new FormData();

  try {
    if (!imageFile.value) return;

    formData.append("file", imageFile.value);
    const res = await UploadImageApi(formData);
    imageArticle.value = res.data as IResponseArticle[];
    ToggleModal()
  } catch (error) {
    console.log(error);
  }
}

function ToggleModal() {
  openModal.value = !openModal.value;
  imageFile.value = null;
}

onMounted(async () => {
  await GetImages();
})

</script>