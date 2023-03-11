let eventBus = new Vue();

Vue.component('notes', {
    props: {
        note: {
            name: {
                type: Text,
                required: true

            },
            tasks: {
                type: Array,
                required: true,
                readLines: {
                    type: Boolean,
                    required: true
                }
            }
        },
        template: `
        <div class="notes">
            <h2 class="error" v-for="error in errors">{{error}}</h2>
            <newNotes></newNotes>
            <div class="note-wrap">
                <div class="note">
                    <ul>
                        <li class="notes-li" v-for="note in colum_1"><p class="note-name">{{note.name}}</p>
                            <ul>
                                <li class="tasks" v-for="task in note.tasks" v-if="task.name !== null">
                                <p class="p-li" :class="{ textDecoration: task.readLines}">{{task.name}}</p>
                                <input type="checkbox" class="checkbox" @click="newStatus_1(note, task)" :disabled="task.readLines">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="note">
                    <ul>
                        <li class="notes-li" v-for="note in colum_2"><p class="note-name">{{note.name}}</p>
                            <ul>
                                <li class="tasks-2" v-for="task in note.tasks" v-if="task.name !== null">
                                <input type="checkbox" class="checkbox" @click="newStatus_2(note, task)" :disabled="task.readLines">
                                <p class="p-li" :class="{ textDecoration: task.readLines }">{{task.name}}</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="note">
                    <ul>
                        <li class="notes-li" v-for="note in colum_3">
                            <p class="note-name">{{note.name}}</p>
                            <ul>
                                <li class="tasks-2" v-for="task in note.tasks" v-if="task.name !== null">
                                <input type="checkbox" class="checkbox" @click="task.readLines = true" :disabled="task.readLines">
                                <p class="p-li" :class="{ textDecoration: task.readLines }">{{task.name}}</p>
                                </li>
                                <p class="note-data">{{ note.date }}</p>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
        data() {
            return {
                colum_1: [],
                colum_2: [],
                colum_3: [],
                errors: []
            }
        },
    }
})