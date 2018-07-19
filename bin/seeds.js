const mongoose = require('mongoose');
// const Exercise = require('../models/exerciseModel');
const Quote = require('../models/quoteModel');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const exercises = [
// {
//     name:'Dumbbell Bench Press',
//     category:'Chest',
//     muscle:'Chest',
//     equipment: 'Dumbbell',
//     description: 'Sit down on bench with dumbbells resting on lower thigh. Kick weights to shoulder and lie back. Position dumbbells to sides of chest with bent arm under each dumbbell. Press dumbbells up with elbows to sides until arms are extended. Lower weight to sides of chest until slight stretch is felt in chest or shoulder. Repeat.',
//     image1: '/images/exercises/db-bench1.jpg',
//     image2: '/images/exercises/db-bench2.jpg'
// },
// {
//     name:'Dumbbell Flys',
//     category:'Chest',
//     muscle:'Chest',
//     equipment: 'Dumbbell',
//     description: 'Lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top. Slightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow. Once the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position.',
//     image1: '/images/exercises/db-fly1.jpg',
//     image2: '/images/exercises/db-fly2.jpg'
// },
// {
//     name:'Incline Dumbbell Press',
//     category:'Chest',
//     muscle:'Chest',
//     equipment: 'Dumbbell',
//     description: 'Sit down on incline bench with dumbbells resting on lower thigh. Kick weights to shoulders and lean back. Position dumbbells to sides of chest with upper arm under each dumbbell. Press dumbbells up with elbows to sides until arms are extended. Lower weight to sides of upper chest until slight stretch is felt in chest or shoulder. Repeat.',
//     image1: '/images/exercises/incline-db1.jpg',
//     image2: '/images/exercises/incline-db2.jpg'
// },
// {
//     name:'Incline Cable Flys',
//     category: 'Chest',
//     muscle:'Chest',
//     equipment: 'Cable',
//     description: 'With a handle on each hand, lie on the incline bench and bring your hands together at arms length in front of your face. This will be your starting position. With a slight bend of your elbows, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Return your arms back to the starting position as you squeeze your chest muscles and exhale. Hold the contracted position for a second.',
//     image1: '/images/exercises/incline-cable1.jpg',
//     image2: '/images/exercises/incline-cable2.jpg'
// },
// {
//     name:'Decline Barbell Bench Press',
//     category:'Chest',
//     muscle:'Chest',
//     equipment: 'Barbell',
//     description: 'Lie supine on decline bench with feet under leg brace. Dismount barbell from rack over chest using wide oblique overhand grip. Lower weight to chest. Press bar until arms are extended. Repeat.',
//     image1: '/images/exercises/decline-bench1.jpg',
//     image2: '/images/exercises/decline-bench2.jpg'
// },
// {
//     name:'Wrist Rotations',
//     category:'Arms',
//     muscle:'Forearm',
//     equipment: 'Barbell',
//     description: 'Hold a barbell with both hands and your palms facing down; hands spaced about shoulder width. Alternating between each of your hands, perform the movement by extending the wrist as though you were rolling up a newspaper. Continue alternating back and forth until failure.',
//     image1: '/images/exercises/wrist-rotation1.jpg',
//     image2: '/images/exercises/wrist-rotation2.jpg'
// },
// {
//     name:'Seated Wrist Curls',
//     category:'Arms',
//     muscle:'Forearm',
//     equipment: 'Cable',
//     description: 'Now hold the handle with both hands, palms up, using a shoulder-width grip. Step back and sit on the bench with your feet about shoulder width apart, firmly on the floor. Lean forward and place the forearms on your thighs with the back of your wrists over your knees. Now curl the bar up as high as possible while contracting the forearms. Tip: Only the wrist should move; not the forearms.',
//     image1: '/images/exercises/wrist-curl1.jpg',
//     image2: '/images/exercises/wrist-curl2.jpg'
// },
// {
//     name:'Wrist Rollers',
//     category:'Arms',
//     muscle:'Forearm',
//     equipment: 'Other',
//     description: 'To begin, stand straight up grabbing a wrist roller using a pronated grip (palms facing down). Slowly lift both arms until they are fully extended and parallel to the floor in front of you. Rotate one wrist at a time in an upward motion to bring the weight up to the bar by rolling the rope around the roller. Once the weight has reached the bar, slowly begin to lower the weight back down by rotating the wrist in a downward motion until the weight reaches the starting position.',
//     image1: '/images/exercises/wrist-roller1.jpg',
//     image2: '/images/exercises/wrist-roller2.jpg'
// },
// {
//     name:'Pullups',
//     category:'Back',
//     muscle:'Lats',
//     equipment: 'Body Only',
//     description: 'Grab the pull-up bar with the palms facing forward using the prescribed grip. Pull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. The upper torso should remain stationary as it moves through space and only the arms should move. After a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.',
//     image1: '/images/exercises/pull-ups1.jpg',
//     image2: '/images/exercises/pull-ups2.jpg'
// },
// {
//     name:'Shotgun Rows',
//     category:'Back', 
//     muscle:'Lats',
//     equipment: 'Cable',
//     description: 'Attach a single handle to a low cable. Your arm should be extended and your shoulder forward. Perform the movement by retracting the shoulder and flexing the elbow. As you pull, supinate the wrist, turning the palm upward as you go.',
//     image1: '/images/exercises/shotgun-row1.jpg',
//     image2: '/images/exercises/shotgun-row2.jpg'
// },
// {
//     name:'T-Bar Rows',
//     category:'Back',
//     muscle:'Middle Back',
//     equipment:'Barbell',
//     description:'Position a bar into a landmine or in a corner to keep it from moving. Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position. Assume a wide stance with your hips back and your chest up. Your arms should be extended. Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. After a brief pause, return to the starting position.',
//     image1:'/images/exercises/t-bar1.jpg',
//     image2:'/images/exercises/t-bar2.jpg',
// },
// {
//     name:'Single Leg Press',
//     category:'Legs',
//     muscle:'Quadriceps',
//     equipment:'Machine',
//     description:'Seat yourself on the machine, planting one foot on the platform in line with your hip. Your free foot can be placed on the ground. Supporting the weight, fully extend the knee and unlock the sled. Lower the weight by flexing the hip and knee, continuing as far as flexibility allows. At the bottom of the motion pause briefly and then return to the starting position by extending the hip and knee.',
//     image1:'/images/exercises/single-leg1.jpg',
//     image2:'/images/exercises/single-leg2.jpg',
// },
// {
//     name:'Barbell Full Squats',
//     category:'Legs',
//     muscle:'Quadriceps',
//     equipment:'Barbell',
//     description:'To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position.',
//     image1:'/images/exercises/full-squat1.jpg',
//     image2:'/images/exercises/full-squat2.jpg',
// },
// {
//     name:'Front Squats with Kettlebells',
//     category:'Legs',
//     muscle:'Quadriceps',
//     equipment:'Kettlebells',
//     description:'Clean two kettlebells to your shoulders. Looking straight ahead at all times, squat as low as you can and pause at the bottom. As you squat down, push your knees out. You should squat between your legs, keeping an upright torso, with your head and chest up. Rise back up by driving through your heels and repeat.',
//     image1:'/images/exercises/kettle-squat1.jpg',
//     image2:'/images/exercises/kettle-squat2.jpg',
// },
// {
//     name:'Barbell Walking Lunges',
//     category:'Legs',
//     muscle:'Quadriceps',
//     equipment:'Barbell',
//     description:'Begin standing with your feet shoulder width apart and a barbell across your upper back. Step forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should stay above the front foot. Drive through the heel of your lead foot and extend both knees to raise yourself back up. Step forward with your rear foot, repeating the lunge on the opposite leg.',
//     image1:'/images/exercises/lunge1.jpg',
//     image2:'/images/exercises/lunge2.jpg',
// },
// {
//     name:'Barbell Deadlifts',
//     category:'Legs',
//     muscle:'Hamstrings',
//     equipment:'Barbell',
//     description:'Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.',
//     image1:'/images/exercises/deadlift1.jpg',
//     image2:'/images/exercises/deadlift2.jpg',
// },
// {
//     name:'Ball Leg Curl',
//     category:'Legs',
//     muscle:'Hamstrings',
//     equipment:'Ball',
//     description:'Begin on the floor laying on your back with your feet on top of the ball. Position the ball so that when your legs are extended your ankles are on top of the ball. Raise your hips off of the ground, keeping your weight on the shoulder blades and your feet. Flex the knees, pulling the ball as close to you as you can, contracting the hamstrings. After a brief pause, return to the starting position.',
//     image1:'/images/exercises/ball-leg1.jpg',
//     image2:'/images/exercises/ball-leg2.jpg',
// },
// {
//     name:'Lying Leg Curls',
//     category:'Legs',
//     muscle:'Hamstrings',
//     equipment:'Machine',
//     description:'Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad of the lever on the back of your legs. Keeping the torso flat on the bench, ensure your legs are fully stretched and grab the side handles of the machine. Curl your legs up as far as possible without lifting the upper legs from the pad. Once you hit the fully contracted position, hold it for a second. Bring the legs back to the initial position.',
//     image1:'/images/exercises/leg-curl1.jpg',
//     image2:'/images/exercises/leg-curl2.jpg',
// },
// {
//     name:'Stiff Leg Dumbbell Deadlifts',
//     category:'Legs',
//     muscle:'Hamstrings',
//     equipment:'Dumbbell',
//     description:'Grasp a couple of dumbbells holding them by your side at arm\'s length. Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. Keeping the knees stationary, lower the dumbbells to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Start bringing your torso up straight again by extending your hips and waist until you are back at the starting position. Repeat.',
//     image1:'/images/exercises/stiff-leg1.jpg',
//     image2:'/images/exercises/stiff-leg2.jpg',
// },
// {
//     name:'Smith Machine Calve Raises',
//     category:'Legs',
//     muscle:'Calves',
//     equipment:'Machine',
//     description:'Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Step onto the plates with the balls of your feet and place the bar on the back of your shoulders. Take the bar with both hands facing forward. Rotate the bar to unrack it. Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down. Return slowly to the starting position as you breathe in while lowering your heels.',
//     image1:'/images/exercises/calve-raise1.jpg',
//     image2:'/images/exercises/calve-raise2.jpg',
// },
// {
//     name:'Calve Press on Machine',
//     category:'Legs',
//     muscle:'Calves',
//     equipment:'Machine',
//     description:'Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. Press on the platform by raising your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position.',
//     image1:'/images/exercises/calve-press1.jpg',
//     image2:'/images/exercises/calve-press2.jpg',
// },
// {
//     name:'Dips For Triceps',
//     category:'Arms',
//     muscle:'Triceps',
//     equipment:'Body Only',
//     description:'To get into the starting position, hold your body at arm\'s length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position.',
//     image1:'/images/exercises/dips1.jpg',
//     image2:'/images/exercises/dips2.jpg',
// },
// {
//     name:'Tricep Pushdowns-V-Bar',
//     category:'Arms',
//     muscle:'Triceps',
//     equipment:'Cable',
//     description:'Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. After a second hold at the contracted position, bring the V-Bar slowly up to the starting point.',
//     image1:'/images/exercises/pushdown1.jpg',
//     image2:'/images/exercises/pushdown2.jpg',
// },
// {
//     name:'Seated Tricep Press',
//     category:'Arms',
//     muscle:'Triceps',
//     equipment:'Dumbbell',
//     description:'Sit down on a bench with back support and grasp a dumbbell with both hands and hold it overhead at arm\'s length. Keeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semi-circular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Go back to the starting position by using the triceps to raise the dumbbell.',
//     image1:'/images/exercises/tricep-press1.jpg',
//     image2:'/images/exercises/tricep-press2.jpg',
// },
// {
//     name:'Smith Machine Shrugs',
//     category:'Traps',
//     muscle:'Traps',
//     equipment:'Machine',
//     description:'Set the bar height on the smith machine around the middle of your thighs. grab the bar using a pronated grip (palms facing you) shoulder width apart from each other. Lift the barbell up and fully extend your arms with your back straight. While exhaling, elevate the bar by raising your shoulders until they come close to touching your ears. Hold the contraction for a second before lowering the bar back down to the starting position. ',
//     image1:'/images/exercises/machine-shrug1.jpg',
//     image2:'/images/exercises/machine-shrug2.jpg',
// },
// {
//     name:'Dumbbell Shrugs',
//     category:'Traps',
//     muscle:'Traps',
//     equipment:'Dumbbell',
//     description:'Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides. Lift the dumbbells by elevating the shoulders as high as possible. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down. Lower the dumbbells back to the original position.',
//     image1:'/images/exercises/dumbbell-shrug1.jpg',
//     image2:'/images/exercises/dumbbell-shrug2.jpg',
// },
// {
//     name:'Side-Lateral to Front Raise',
//     category:'Shoulders',
//     muscle:'Deltoids',
//     equipment:'Dumbbell',
//     description:'In a standing position, hold a pair of dumbbells at your side. Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating. At the top of the exercise move the weights out in front of you, keeping your arms extended. Lower the weights with a controlled motion. On the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides. ',
//     image1:'/images/exercises/side-lateral1.jpg',
//     image2:'/images/exercises/side-lateral2.jpg',
// },
// {
//     name:'Push Press',
//     category:'Shoulders',
//     muscle:'Deltoids',
//     equipment:'Dumbbell',
//     description:'Slightly flex the hips and knees, keeping torso erect. Immediately follow with an explosive push upward by extending the knees. At maximum plantar flexion, push bar from the shoulders. Push the bar with the arms to a fully extended elbow position overhead. Lower bar to shoulders. Straighten the hips and knees before the upward movement phase begins again.',
//     image1:'/images/exercises/push1.jpg',
//     image2:'/images/exercises/push2.jpg',
// },
// {
//     name:'Seated Dumbbell Press',
//     category:'Shoulders',
//     muscle:'Deltoids',
//     equipment:'Dumbbell',
//     description:'Grab a couple of dumbbells and sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs.Clean the dumbbells up one at a time by using your thighs to bring the dumbbells up to shoulder height at each side. As you exhale, push the dumbbells up until they touch at the top. After a second pause, slowly come down back to the starting position as you inhale.',
//     image1:'/images/exercises/dumbbell-press1.jpg',
//     image2:'/images/exercises/dumbbell-press2.jpg',
// },
// {
//     name:'Reverse Flys',
//     category:'Shoulders',
//     muscle:'Deltoids',
//     equipment:'Dumbbell',
//     description:'To begin, lie down on an incline bench with the chest and stomach pressing against the incline. Have the dumbbells in each hand with the palms facing each other (neutral grip). Extend the arms in front of you so that they are perpendicular to the angle of the bench. The legs should be stationary while applying pressure with the ball of your toes. Maintaining the slight bend of the elbows, move the weights out and away from each other (to the side) in an arc motion while exhaling. The arms should be elevated until they are parallel to the floor. Feel the contraction and slowly lower the weights back down to the starting position while inhaling.',
//     image1:'/images/exercises/reverse-fly1.jpg',
//     image2:'/images/exercises/reverse-fly2.jpg',
// },
// {
//     name:'Cross-Body Crunch',
//     category:'Abs',
//     muscle:'Abdominals',
//     equipment:'Body Only',
//     description:'Lie flat on your back and bend your knees about 60 degrees. Keep your feet flat on the floor and place your hands loosely behind your head. Now curl up and bring your right elbow and shoulder across your body while bring your left knee in toward your left shoulder at the same time. Reach with your elbow and try to touch your knee. Now go back down to the starting position as you inhale and repeat with the left elbow and the right knee. Continue alternating in this manner until all prescribed repetitions are done.',
//     image1:'/images/exercises/crunch1.jpg',
//     image2:'/images/exercises/crunch2.jpg',
// },
// {
//     name:'Decline Reverse Crunch',
//     category:'Abs',
//     muscle:'Abdominals',
//     equipment:'Body Only',
//     description:'Lie on your back on a decline bench and hold on to the top of the bench with both hands. Don\'t let your body slip down from this position. Hold your legs parallel to the floor using your abs to hold them there while keeping your knees and feet together. While exhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the bench. At the end of this movement your knees will be touching your chest. Hold the contraction for a second and move your legs back to the starting position while inhaling.',
//     image1:'/images/exercises/decline-crunch1.jpg',
//     image2:'/images/exercises/decline-crunch2.jpg',
// },
// {
//     name:'Standing Cable Lift',
//     category:'Abs',
//     muscle:'Abdominals',
//     equipment:'Cable',
//     description:'Connect a standard handle on a tower, and move the cable to the lowest pulley position. With your side to the cable, grab the handle with one hand and step away from the tower. our outstretched arm should be aligned with the cable. With your feet positioned shoulder width apart, squat down and grab the handle with both hands. Your arms should still be fully extended. In one motion, pull the handle up and across your body until your arms are in a fully-extended position above your head. Keep your back straight and your arms close to your body as you pivot your back foot and straighten your legs to get a full range of motion. Retract your arms and then your body. Return to the neutral position in a slow and controlled manner.',
//     image1:'/images/exercises/cable-lift1.jpg',
//     image2:'/images/exercises/cable-lift2.jpg',
// },
// {
//     name:'Plate Twists',
//     category:'Abs',
//     muscle:'Abdominals',
//     equipment:'Plate',
//     description:'Lie down on the floor or an exercise mat with your legs fully extended and your upper body upright. Grab the plate by its sides with both hands out in front of your abdominals with your arms slightly bent. Slowly cross your legs near your ankles and lift them up off the ground. Your knees should also be bent slightly. Move the plate to the left side and touch the floor with it. Come back to the starting position as you breathe in and then repeat the movement but this time to the right side of the body.',
//     image1:'/images/exercises/twist1.jpg',
//     image2:'/images/exercises/twist2.jpg',
// },
// {
//     name:'Planks',
//     category:'Abs',
//     muscle:'Abdominals',
//     equipment:'Body Only',
//     description:'Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.',
//     image1:'/images/exercises/plank1.jpg',
//     image2:'/images/exercises/plank2.jpg',
// },
// {
//     name:'Wide-Grip Standing Barbell Curls',
//     category:'Arms',
//     muscle:'Biceps',
//     equipment:'Barbell',
//     description:'Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position.',
//     image1:'/images/exercises/wide-curl1.jpg',
//     image2:'/images/exercises/wide-curl2.jpg',
// },
// {
//     name:'Hammer Curls',
//     category:'Arms',
//     muscle:'Biceps',
//     equipment:'Dumbbell',
//     description:'Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. After the brief pause, begin the lower the dumbbells back down to the starting position.',
//     image1:'/images/exercises/hammer-curl1.jpg',
//     image2:'/images/exercises/hammer-curl2.jpg',
// },
// {
//     name:'Overhead Cable Curls',
//     category:'Arms',
//     muscle:'Biceps',
//     equipment:'Cable',
//     description:'To begin, set a weight that is comfortable on each side of the pulley machine. Now adjust the height of the pulleys on each side and make sure that they are positioned at a height higher than that of your shoulders. Stand in the middle of both sides and use an underhand grip (palms facing towards the ceiling) to grab each handle. Your arms should be fully extended and parallel to the floor with your feet positioned shoulder width apart from each other. Your body should be evenly aligned the handles. While exhaling, slowly squeeze the biceps on each side until your forearms and biceps touch. While inhaling, move your forearms back to the starting position.',
//     image1:'/images/exercises/overhead-curl1.jpg',
//     image2:'/images/exercises/overhead-curl2.jpg',
// },
// {
//     name:'Machine Bicep Curls',
//     category:'Arms',
//     muscle:'Biceps',
//     equipment:'Machine',
//     description:'Place your upper arms against the pads and grasp the handles. Perform the movement by flexing the elbow, pulling your lower arm towards your upper arm. Pause at the top of the movement, and then slowly return the weight to the starting position.',
//     image1:'/images/exercises/machine-curl1.jpg',
//     image2:'/images/exercises/machine-curl2.jpg',
// },
// {
//     name:'Dumbbell Bicep Curls',
//     category:'Arms',
//     muscle:'Biceps',
//     equipment:'Dummbell',
//     description:'Stand up straight with a dumbbell in each hand at arm\'s length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps. Then, slowly begin to lower the dumbbells back to the starting position.',
//     image1:'/images/exercises/dumbbell-curl1.jpg',
//     image2:'/images/exercises/dumbbell-curl2.jpg',
// },
// {
//     name:'Band Hip Adductions',
//     category:'Legs',
//     muscle:'Adductors',
//     equipment:'Dummbell',
//     description:'Anchor a band around a solid post or other object. Stand with your left side to the post, and put your right foot through the band, getting it around the ankle. Stand up straight and hold onto the post if needed. Keeping the knee straight, raise your right legs out to the side as far as you can.',
//     image1:'/images/exercises/band-adductor1.jpg',
//     image2:'/images/exercises/band-adductor2.jpg',
// },
// {
//     name:'Thigh Adductors',
//     category:'Legs',
//     muscle:'Adductors',
//     equipment:'Machine',
//     description:'Sit down on the adductor machine and select a weight you are comfortable with. When your legs are positioned properly on the leg pads of the machine, grip the handles on each side. Your entire upper body (from the waist up) should be stationary. Slowly press against the machine with your legs to move them towards each other while exhaling. Feel the contraction for a second and begin to move your legs back to the starting position.',
//     image1:'/images/exercises/thigh-adductor1.jpg',
//     image2:'/images/exercises/thigh-adductor2.jpg',
// },
// {
//     name:'Fire Hydrants',
//     category:'Legs',
//     muscle:'Abductors',
//     equipment:'Body Only',
//     description:'Position yourself on your hands and knees on the ground. Keeping the knee in a bent position, abduct the femur, moving your knee away from the midline of the body. Pause at the top of the motion, and then slowly return to the starting position.',
//     image1:'/images/exercises/hydrant1.jpg',
//     image2:'/images/exercises/hydrant2.jpg',
// },
// {
//     name:'Lateral Band Walks',
//     category:'Legs',
//     muscle:'Abductors',
//     equipment:'Bands',
//     description:'Position a band around your lower legs. The resistance can be applied closer to the knees for an easier movement or around the ankles or feet for a more advanced movement. With the band in place, assume an athletic standing position, with the knees and hips slightly bent, feet shoulder-width apart, and the head and chest up. Staying low, take a slow, lateral step. Keep your toes pointed forward and stay low. After completing the step, follow with the opposite leg. Step slowly, resisting the band. Keep the feet at least shoulder width apart to maintain band tension.',
//     image1:'/images/exercises/lateral1.jpg',
//     image2:'/images/exercises/lateral2.jpg',
// },
// {
//     name:'Seated Cable Rows',
//     category:'Back',
//     muscle:'Middle Back',
//     equipment:'Bands',
//     description:'Position a band around your lower legs. The resistance can be applied closer to the knees for an easier movement or around the ankles or feet for a more advanced movement. With the band in place, assume an athletic standing position, with the knees and hips slightly bent, feet shoulder-width apart, and the head and chest up. Staying low, take a slow, lateral step. Keep your toes pointed forward and stay low. After completing the step, follow with the opposite leg. Step slowly, resisting the band. Keep the feet at least shoulder width apart to maintain band tension.',
//     image1:'/images/exercises/cable-row1.jpg',
//     image2:'/images/exercises/cable-row2.jpg',
// },
// {
//     name:'Lying Face Down Plate Neck Resistance',
//     category:'Neck',
//     muscle:'Neck',
//     equipment:'Plate',
//     description:'Lie face down with your whole body straight on a flat bench while holding a weight plate behind your head. While keeping the plate secure on the back of your head slowly lower your head (as in saying yes) as you breathe in. Raise your head back up to the starting position in a semi-circular motion as you breathe out. Hold the contraction for a second.',
//     image1:'/images/exercises/neck-plate1.jpg',
//     image2:'/images/exercises/neck-plate2.jpg',
// },
// {
//     name:'Isometric Neck-Sides',
//     category:'Neck',
//     muscle:'Neck',
//     equipment:'Body Only',
//     description:'With your head and neck in a neutral position (normal position with head erect facing forward), place your left hand on the left side of your head. Now gently push towards the left as you contract the left neck muscles but resisting any movement of your head. Start with slow tension and increase slowly. Hold for the recommended number of seconds. Now release tension slowly.',
//     image1:'/images/exercises/iso-neck1.jpg',
//     image2:'/images/exercises/iso-neck2.jpg',
// },
// {
//     name:'Finger Curls',
//     category:'Arms',
//     muscle:'Forearm',
//     equipment:'Barbell',
//     description:'Hold a barbell with both hands and your palms facing up; hands spaced about shoulder width. Place your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. Lower the bar as far as possible by extending the fingers. Allowing the bar to roll down the hands, catch the bar with the final joint in the fingers. Now curl bar up as high as possible by closing your hands while exhaling. Hold the contraction at the top.',
//     image1:'/images/exercises/finger-1.jpg',
//     image2:'/images/exercises/finger-2.jpg',
// },
// {
//     name:'Barbell Seated Calf Raise',
//     category:'Legs',
//     muscle:'Calves',
//     equipment:'Barbell',
//     description:'Place a block about 12 inches in front of a flat bench. Sit on the bench and place the ball of your feet on the block. Have someone place a barbell over your upper thighs about 3 inches above your knees and hold it there. Raise up on your toes as high as possible as you squeeze the calves. After a second contraction, slowly go back to the starting position.',
//     image1:'/images/exercises/seated-calf1.jpg',
//     image2:'/images/exercises/seated-calf2.jpg',
// },
// {
//     name:'Kneeling Cable Tricep Extension',
//     category:'Arms',
//     muscle:'Triceps',
//     equipment:'Cable',
//     description:'Place a bench sideways in front of a high pulley machine. Hold a straight bar attachment above your head with your hands about 6 inches apart with your palms facing down. Face away from the machine and kneel. Place your head and the back of your upper arms on the bench. Your elbows should be bent with the forearms pointing towards the high pulley. While keeping your upper arms close to your head at all times with the elbows in, press the bar out in a semicircular motion until the elbows are locked and your arms are parallel to the floor. Contract the triceps hard and keep this position for a second.',
//     image1:'/images/exercises/kneeling-tricep1.jpg',
//     image2:'/images/exercises/kneeling-tricep2.jpg',
// },
// {
//     name:'Machine Shoulder Shrug',
//     category:'Traps',
//     muscle:'Traps',
//     equipment:'Machine',
//     description:'Position yourself on the calf machine so that the shoulder pads are above your shoulders. Your torso should be straight with the arms extended normally by your side. Raise your shoulders up towards your ears as you exhale and hold the contraction for a full second. Slowly return to the starting position as you inhale.',
//     image1:'/images/exercises/calf-shrug1.jpg',
//     image2:'/images/exercises/calf-shrug2.jpg',
// },
// {
//     name:'Clean Shrug',
//     category:'Traps',
//     muscle:'Traps',
//     equipment:'Barbell',
//     description:'Begin with a shoulder width, double overhand or hook grip, with the bar hanging at the mid thigh position. Your back should be straight and inclined slightly forward. Shrug your shoulders towards your ears. While this exercise can usually by loaded with heavier weight than a clean, avoid overloading to the point that the execution slows down.',
//     image1:'/images/exercises/clean-shrug1.jpg',
//     image2:'/images/exercises/clean-shrug2.jpg',
// },
// {
//     name:'Kettle Bell High Pull',
//     category:'Traps',
//     muscle:'Traps',
//     equipment:'Kettlebell',
//     description:'Place a kettlebell on the ground between your feet. Position your feet in a wide stance, and grasp the kettlebell with two hands. Set your hips back as far as possible, with your knees bent. Keep your chest and head up. Begin by extending the hips and knees, simultaneously pulling the kettlebell to your shoulders, raising your elbows as you do so. Reverse the motion to return to the starting position.',
//     image1:'/images/exercises/kettle-shrug1.jpg',
//     image2:'/images/exercises/kettle-shrug2.jpg',
// },
// {
//     name:'Glute Ham Raise',
//     category:'Legs',
//     muscle:'Hamstrings',
//     equipment:'Body Only',
//     description:'Using the leg pad of a lat pulldown machine or a preacher bench, position yourself so that your ankles are under the pads, knees on the seat, and you are facing away from the machine. You should be upright and maintaining good posture. Lower yourself under control until your knees are almost completely straight. Remaining in control, raise yourself back up to the starting position.',
//     image1:'/images/exercises/glute-raise1.jpg',
//     image2:'/images/exercises/glute-raise2.jpg',
// },
// {
//     name:'Bridges',
//     category:'Legs',
//     muscle:'Glutes',
//     equipment:'Body Only',
//     description:'Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second.',
//     image1:'/images/exercises/bridge1.jpg',
//     image2:'/images/exercises/bridge2.jpg',
// },
// {
//     name:'Pull Through',
//     category:'Legs',
//     muscle:'Glutes',
//     equipment:'Cable',
//     description:'Begin standing a few feet in front of a low pulley with a rope or handle attached. Face away from the machine, straddling the cable, with your feet set wide apart. Begin the movement by reaching through your legs as far as possible, bending at the hips. Keep your knees slightly bent. Keeping your arms straight, extend through the hip to stand straight up. Avoid pulling upward through the shoulders; all of the motion should originate through the hips.',
//     image1:'/images/exercises/pull1.jpg',
//     image2:'/images/exercises/pull2.jpg',
// },
// {
//     name:'Landmines 180',
//     category:'Legs',
//     muscle:'Glutes',
//     equipment:'Cable',
//     description:'Begin standing a few feet in front of a low pulley with a rope or handle attached. Face away from the machine, straddling the cable, with your feet set wide apart. Begin the movement by reaching through your legs as far as possible, bending at the hips. Keep your knees slightly bent. Keeping your arms straight, extend through the hip to stand straight up. Avoid pulling upward through the shoulders; all of the motion should originate through the hips.',
//     image1:'/images/exercises/pull1.jpg',
//     image2:'/images/exercises/pull2.jpg',
// },


// ]

// Exercise.create(exercises)
// .then((response)=>{
//     console.log(`created ${response.length} exercises`)
// })
// .catch((err)=>{
//     console.log(err)
// })

const quotes = [
    {
        quote: '“ Of course it’s hard. It’s supposed to be hard. It it were easy, everybody would do it. Hard is what makes it great. ”'
    },
    {
        quote: '“ No pain, no gain. Shut up and train. ”'
    },
    {
        quote: '“ Your body can stand almost anything. It’s your mind that you have to convince. ”'
    },
    {
        quote: '“ Success isn’t always about greatness. It’s about consistency. Consistent hard work gains success. Greatness will come. ”'
    },
    {
        quote: '“ Train insane or remain the same. ”'
    },
    {
        quote: '“ Definition of a really good workout: when you hate doing it, but you love finishing it. ”'
    },
    {
        quote: '“ Push yourself because no one else is going to do it for you. ”'
    },
    {
        quote: '“ Suck it up. And one day you won’t have to suck it in. ”'
    },
    {
        quote: '“ Success starts with self-discipline. ”'
    },
    {
        quote: '“ Good things come to those who sweat. ”'
    },
    {
        quote: '“ Motivation is what gets you started. Habit is what keeps you going. ”'
    },
    {
        quote: '“ A one hour workout is 4% of your day. No excuses. ”'
    },
    {
        quote: '“ The body achieves what the mind believes. ”'
    },
    {
        quote: '“ What seems impossible today will one day become your warm-up. ”'
    },
    {
        quote: '“ Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. ”'
    },
    {
        quote: '“ Someone busier than you is working out right now. ”'
    },
    {
        quote: '“ Hustle for that muscle. ”'
    },
    {
        quote: '“ Work hard in silence. Let success be your noise. ”'
    },
    {
        quote: '“ The hardest lift of all is lifting your butt off the couch. ”'
    },
    {
        quote: '“ If you still look good at the end of your workout, you didn’t train hard enough. ”'
    },
    {
        quote: '“ When you feel like quitting think about why you started. ”'
    },
    {
        quote: '“ A good workout is when you make your dry fit shirt look like false advertising. ”'
    },
    {
        quote: '“ I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count. ”'
    },
    {
        quote: '“ It comes down to one simple thing: how bad do you want it? ”'
    },
    {
        quote: '“ Making excuses burns zero calories per hour. ”'
    },
    {
        quote: '“ Obstacles can’t stop you. Problems can’t stop you. People can’t stop you. Only you can stop you. ”'
    },
    {
        quote: '“ Making excuses burns zero calories per hour. ”'
    },
    {
        quote: '“ The only bad workout is the one that didn’t happen. ”'
    },
    {
        quote: '“ Exercise is like telling your body “ you’re gonna hate me for this, but you’ll thank me later. ”'
    },
    {
        quote: '“ The pain you feel today, will be the strength you feel tomorrow. ”'
    },
    {
        quote: '“ Don’t limit your challenges, challenge your limits. ”'
    },
    {
        quote: '“ It’s actually pretty simple. Either you do it, or you don’t. ”'
    },
    {
        quote: '“ Believe in yourself and all that you are. Know that there is something inside of you that is greater than any obstacle. ”'
    },
    {
        quote: '“ Nothing truly great ever came from a comfort zone. ”'
    },
    {
        quote: '“ You don’t have to be extreme, just consistent. ”'
    },
    {
        quote: '“ Less sugar, more fruit. Less soda, more water. Less driving, more walking. Less worry, more sleep. Less words, more action. ”'
    },
    {
        quote: '“ The difference between wanting and achieving is discipline. ”'
    },
    {
        quote: '“ The hard part isn’t getting your body in shape. The hard part is getting your mind in shape. ”'
    },
    {
        quote: '“ Remember, Rome wasn’t built in a day. Work hard, good results will come. ”'
    },
    {
        quote: '“ Sticks and stones may break my bones but squats will make me badass. ”'
    },
    {
        quote: '“ Wake up. Work out. Look hot. Kick ass. ”'
    },
    {
        quote: '“ Go the extra mile. It’s never crowded. ”'
    },
    {
        quote: '“ I may not be there yet, but I’m closer than I was yesterday. ”'
    },
    {
        quote: '“ Don’t wish for a good body, work for it. ”'
    },
    {
        quote: '“ Don’t be afraid of being a beginner. ”'
    },
    {
        quote: '“ First they will laugh. Then they will copy. Don’t give up. ”'
    },
    {
        quote: '“ Sweat is magic. Cover yourself in it daily to grant your wishes. ”'
    },
    {
        quote: '“ Sore. The most satisfying pain. ”'
    },
    {
        quote: '“ 70% of people that start a fitness plan quit. Except you. Not this time. ”'
    },
]


Quote.create(quotes)
.then((response)=>{
    console.log(`created ${response.length} quotes`)
})
.catch((err)=>{
    console.log(err)
})