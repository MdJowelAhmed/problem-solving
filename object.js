const university = {
    name: "Global University",
    faculties: [
        {
            name: "Engineering",
            dean: "Dr. John Doe",
            departments: [
                { name: "Computer Science", head: "Prof. Alan" },
                { name: "Electrical Engineering", head: "Prof. Smith" }
            ]
        },
        {
            name: "Business",
            dean: "Dr. Jane Smith",
            departments: [
                { name: "Finance", head: "Prof. James" },
                { name: "Marketing", head: "Prof. Robert" }
            ]
        }
    ]
};

// Accessing nested properties within arrays
// console.log(university.faculties[0].name)// Output: Engineering
//  console.log(university.faculties[1].departments[0].head) // Output: Prof. James
// console.log(university.faculties[0].departments[1].name)  // Output: Electrical Engineering


const techEvent = {
    eventName: "Tech Conference 2024",
    venue: {
        name: "Convention Center",
        location: {
            city: "Los Angeles",
            state: "California",
            coordinates: {
                latitude: 34.0522,
                longitude: -118.2437
            }
        }
    },
    sessions: [
        {
            title: "AI and Machine Learning",
            speaker: {
                name: "Dr. Emily Stone",
                bio: "AI researcher and professor",
                contacts: {
                    email: "emily.stone@example.com",
                    twitter: "@emilystone"
                }
            }
        },
        {
            title: "Blockchain Technology",
            speaker: {
                name: "Mr. Michael Lee",
                bio: "Blockchain expert",
                contacts: {
                    email: "michael.lee@example.com",
                    twitter: "@michaelblockchain"
                }
            }
        }
    ]
};

// Accessing deeply nested properties
console.log(techEvent.venue.location?.city) // Output: Los Angeles
console.log(techEvent.sessions[0].speaker.contacts.twitter) // Output: Dr. Emily Stone
 // Output: @michaelblockchain
