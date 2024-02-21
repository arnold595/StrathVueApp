<template>
    <div id = 'homepage'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://images.unsplash.com/20/cambridge.JPG"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                                <v-card
                                width="400"
                                title="Student  Life"
                                subtitle="This is a subtitle"
                                text="Student life encompasses a broad range of experiences and activities that revolve around being a student, typically in a formal educational setting such as a school, college, or university. Here are some aspects commonly associated with student life:

Academic Pursuits: This includes attending classes, studying, completing assignments, and preparing for exams. Students engage with various subjects and disciplines according to their chosen field of study.

Extracurricular Activities: These are activities pursued outside of the regular academic curriculum, such as sports, clubs, student organizations, community service, arts, and cultural events. Extracurricular activities provide opportunities for personal growth, skill development, and social interaction.

Social Life: Interacting with peers, making friends, and forming social connections are integral parts of student life. Students often engage in social activities like parties, outings, and gatherings, both on and off-campus.

Living Arrangements: Many students live away from home during their academic years, either in dormitories, apartments, or shared housing. Managing one's living space, budgeting, cooking, and other aspects of independent living become part of the student experience.

Financial Management: Balancing the expenses of tuition, textbooks, housing, food, transportation, and other necessities requires effective financial planning and budgeting skills. Many students also work part-time jobs to support themselves financially.

Health and Wellness: Maintaining physical and mental health is essential for academic success and overall well-being. This includes exercise, healthy eating, stress management, seeking support when needed, and accessing healthcare services.

Personal Development: College years are a time of personal growth and self-discovery. Students explore their interests, values, and goals, develop critical thinking skills, and gain independence and autonomy.

Career Preparation: For many students, higher education is a stepping stone to future career opportunities. This may involve internships, co-op programs, career fairs, networking events, and other activities aimed at gaining experience and building professional skills.

Overall, student life is a multifaceted experience characterized by learning, exploration, challenges, and growth. It offers opportunities for academic achievement, personal development, and the f."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                             acccomodation
                        
                                </template>

                                <template v-slot:subtitle>
                                    This is a subtitle
                                </template>

                                <template v-slot:text>
                                    Accommodation is a crucial aspect of student life, especially for those attending colleges or universities away from their hometowns. Here's an overview of accommodation options typically available to students:

On-Campus Housing: Many colleges and universities offer on-campus accommodation in the form of dormitories, residence halls, or student apartments. Living on campus can provide convenience in terms of proximity to classes and campus facilities, as well as opportunities for social interaction and involvement in campus activities.

Off-Campus Housing: Some students prefer to live off-campus in rented apartments, houses, or shared accommodation. Off-campus housing offers more independence and flexibility in terms of choice of location, amenities, and roommates. It also allows students to experience living in the local community.

Homestays: International students or those looking for a more immersive cultural experience may opt for homestays, where they live with a local family. This arrangement provides opportunities to practice language skills, learn about the host country's culture, and receive support and guidance from the host family.

Student Residences or Hostels: In some locations, there are specialized student residences or hostels that cater specifically to the needs of students. These accommodations may offer affordable rates, shared facilities, and a supportive community environment.

Temporary Housing: Students may also consider temporary housing options such as hotels, hostels, or short-term rentals when transitioning between accommodation arrangements or during breaks in the academic calendar.
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>sport</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Accommodation is a crucial aspect of student life, especially for those attending colleges or universities away from their hometowns. Here's an overview of accommodation options typically available to students:

On-Campus Housing: Many colleges and universities offer on-campus accommodation in the form of dormitories, residence halls, or student apartments. Living on campus can provide convenience in terms of proximity to classes and campus facilities, as well as opportunities for social interaction and involvement in campus activities.

Off-Campus Housing: Some students prefer to live off-campus in rented apartments, houses, or shared accommodation. Off-campus housing offers more independence and flexibility in terms of choice of location, amenities, and roommates. It also allows students to experience living in the local community.

Homestays: International students or those looking for a more immersive cultural experience may opt for homestays, where they live with a local family. This arrangement provides opportunities to practice language skills, learn about the host country's culture, and receive support and guidance from the host family.

Student Residences or Hostels: In some locations, there are specialized student residences or hostels that cater specifically to the needs of students. These accommodations may offer affordable rates, shared facilities, and a supportive community environment.

Temporary Housing: Students may also consider temporary housing options such as hotels, hostels, or short-term rentals when transitioning between accommodation arrangements or during breaks in the academic calendar.
                                </v-card-text>
                                </v-card>
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script setup>
  const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>