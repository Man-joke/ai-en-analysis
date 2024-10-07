<template>
    <div class="guide_contents">
        <h1>Button guide</h1>
        <section>
            <h2>default</h2>
            <table class="guide_table">
                <colgroup>
                    <col width="9%" />
                    <col span="4" width="*" />
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>class="size_xxs" <br/>(height 3rem)</th>
                        <th>size="x-small" <br/>(min-width 8rem /<br/> height 3.2rem)</th>
                        <th>size="small" <br/>(min-width 11rem /<br/> height 3.6rem)</th>
                        <th>default <br/>(height 4rem)</th>
                        <th>class="size_md" <br/>(min-width 14rem /<br/> height 4rem)</th>
                        <th>size="large" <br/>(min-width 16rem /<br/> height 5.6rem)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>default</th>
                        <td>
                            <v-btn rounded flat class="size_xxs">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="size_md">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large">버튼</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th>.primary</th>
                        <td>
                            <v-btn rounded flat class="size_xxs primary">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small" class="primary">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small" class="primary">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="primary">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="primary size_md">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large" class="primary">버튼</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th>.secondary</th>
                        <td>
                            <v-btn rounded flat class="secondary size_xxs">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small" class="secondary">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small" class="secondary">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="secondary">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="secondary size_md">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large" class="secondary">버튼</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th>.dark_blue</th>
                        <td>
                            <v-btn rounded flat class="dark_blue size_xxs">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small" class="dark_blue">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small" class="dark_blue">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="dark_blue">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="dark_blue size_md">버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large" class="dark_blue">버튼</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th>Icon + Text</th>
                        <td>

                            <v-btn flat rounded class="primary size_xxs">
                                <i class="ico refresh ico_size_sm mr-1" />
                                버튼
                            </v-btn>
                            <v-btn flat rounded class="secondary size_xxs">
                                버튼
                                <i class="ico right_24 ico_size_sm ml-1" />
                            </v-btn>
                        </td>
                        <td>
                            <v-btn flat rounded size="x-small" class="primary">
                                <i class="ico refresh ico_size_sm mr-1" />
                                버튼
                            </v-btn>
                            <v-btn flat rounded size="x-small" class="secondary">
                                버튼
                                <i class="ico right_24 ico_size_sm ml-1" />
                            </v-btn>
                        </td>
                        <td>
                            <v-btn flat rounded size="small" class="primary">
                                <i class="ico refresh ico_size_sm mr-1" />
                                버튼
                            </v-btn>
                            <v-btn flat rounded size="small" class="secondary">
                                버튼
                                <i class="ico right_24 ico_size_sm ml-1" />
                            </v-btn>
                        </td>
                        <td>
                            <v-btn flat rounded class="primary">
                                <i class="ico refresh ico_size_sm mr-1" />
                                버튼
                            </v-btn>
                            <v-btn flat rounded class="secondary">
                                버튼
                                <i class="ico right_24 ico_size_sm ml-1" />
                            </v-btn>
                        </td>
                        <td>
                            <v-btn flat rounded class="primary size_md">
                                <i class="ico refresh ico_size_sm mr-1" />
                                버튼
                            </v-btn>
                            <v-btn flat rounded class="secondary size_md">
                                버튼
                                <i class="ico right_24 ico_size_sm ml-1" />
                            </v-btn>
                        </td>
                        <td>
                            <v-btn flat rounded size="large" class="primary">
                                <i class="ico refresh ico_size_sm mr-1" />
                                버튼
                            </v-btn>
                            <v-btn flat rounded size="large" class="secondary">
                                버튼
                                <i class="ico right_24 ico_size_sm ml-1" />
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>
            <h2>disabled</h2>
            <table class="guide_table">
                <colgroup>
                    <col width="9%" />
                    <col span="4" width="*" />
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>class="size_xxs" <br/>(height 3rem)</th>
                        <th>size="x-small" <br/>(min-width 8rem /<br/> height 3.2rem)</th>
                        <th>size="small" <br/>(min-width 11rem /<br/> height 3.6rem)</th>
                        <th>default <br/>(height 4rem)</th>
                        <th>class="size_md" <br/>(min-width 14rem /<br/> height 4rem)</th>
                        <th>size="large" <br/>(min-width 16rem /<br/> height 5.6rem)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>default</th>
                        <td>
                            <v-btn rounded flat class="size_xxs" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat disabled>버튼</v-btn>
                        </td>   
                        <td>
                            <v-btn rounded flat class="size_md" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large" disabled>버튼</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th>.primary</th>
                        <td>
                            <v-btn rounded flat class="primary size_xxs" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small" class="primary" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small" class="primary" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="primary" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="primary size_md" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large" class="primary" disabled>버튼</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th>.secondary</th>
                        <td>
                            <v-btn rounded flat class="secondary size_xxs" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small" class="secondary" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small" class="secondary" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="secondary" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="secondary size_md" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large" class="secondary" disabled>버튼</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th>.dark_blue</th>
                        <td>
                            <v-btn rounded flat class="dark_blue size_xxs" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="x-small" class="dark_blue" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="small" class="dark_blue" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="dark_blue" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat class="dark_blue size_md" disabled>버튼</v-btn>
                        </td>
                        <td>
                            <v-btn rounded flat size="large" class="dark_blue" disabled>버튼</v-btn>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>
